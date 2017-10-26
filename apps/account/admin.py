from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from apps.account.models import User, UserPlan

admin.site.register(User, UserAdmin)
admin.site.register(UserPlan)
