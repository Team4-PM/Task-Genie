from rest_framework import serializers
from .models import services, task_genieuser, appointments

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = ['id', 'Provider', 'Category', 'Description', 'contact']  # Include all necessary fields

class TaskGenieUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = task_genieuser
        fields = ['name', 'email', 'password']  # Include all necessary fields

class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = appointments
        fields = ['id', 'Date', 'services']  # Include necessary fields; you can also include a nested serializer if needed
