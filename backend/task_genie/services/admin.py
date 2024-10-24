from django.contrib import admin

from .models import services
from .models import appointments
from .models import task_genieuser

admin.site.register(services)
admin.site.register(appointments)
admin.site.register(task_genieuser)