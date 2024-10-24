from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class services(models.Model):
    Provider = models.CharField('Provider Name',max_length=50)
    Category = models.CharField('Category',max_length=20)
    Description = models.CharField(blank=True,max_length=120)
    contact = models.EmailField('Email')
    
    def __str__(self):
        return self.Provider

class task_genieuser(models.Model):
      name = models.CharField(max_length=50) 
      email = models.EmailField('Email')
      password = models.CharField(max_length=5)  

      def __str__(self):
        return self.name
      
class appointments(models.Model):
    Date = models.DateTimeField()
    services = models.ForeignKey(services,on_delete=models.CASCADE)

    def __str__(self):
        return self.name