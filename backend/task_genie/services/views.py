from django.shortcuts import render
from django.http import JsonResponse
from .models import services, task_genieuser  # Ensure to import your services model
from django.db.models import Q
from .serializers import TaskGenieUserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate


def search(request):
    query = request.GET.get('query', '')
    if query:
        results = services.objects.filter(
            Q(Category__icontains=query)  # Query for Category field
        )
        # Prepare the data to send back
        data = [{"id": result.id, "Provider": result.Provider, "Category": result.Category} for result in results]
        return JsonResponse(data, safe=False)
    return JsonResponse([], safe=False)

# Create your views here.
def home(request):
    return render(request,'home.html',{})

@api_view(['POST'])
def sign_in(request):
    email = request.data.get('email')  # Extract email from request data
    password = request.data.get('password')  # Extract password from request data
    try:
        user = task_genieuser.objects.get(email=email)
        if user and user.password == password:  # Compare passwords directly
            # Successful authentication
            user_data = {
                'name': user.name,  # Assuming you have first_name and last_name in your model
                'email': user.email,
                'password': user.password  # Consider removing this for security
            }
            return Response({'message': 'Sign in successful!', 'user': user_data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
    except task_genieuser.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def sign_up(request):
    if request.method == 'POST':
        serializer = TaskGenieUserSerializer(data=request.data)
        if serializer.is_valid():
            # Save user data with hashed password logic here
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_user(request):
    # Assuming the user is authenticated and you have a way to identify the user
    # Here, we are using the email passed in the request (you might want to handle auth differently)
    email = request.query_params.get('email')  # You might want to pass the email in headers or use session authentication

    try:
        user = task_genieuser.objects.get(email=email)
        user_data = {
            'name': user.name,
            'email': user.email,
            'password': user.password  # Consider not sending the password
        }
        return Response(user_data, status=status.HTTP_200_OK)
    except task_genieuser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def update_user(request):
    email = request.data.get('email')  # Ensure you pass the email for identification
    try:
        user = task_genieuser.objects.get(email=email)
        user.name = request.data.get('name', user.name)  # Update name
        user.email = request.data.get('email', user.email)  # Update email
        user.password = request.data.get('password', user.password)  # Update password
        user.save()  # Save the updated user
        return Response({'message': 'User updated successfully!'}, status=status.HTTP_200_OK)
    except task_genieuser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)