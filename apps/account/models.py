from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class UserPlan(models.Model):
    user = models.ForeignKey(User)
    name = models.CharField("Plan name", max_length=200, default='')
    number_of_products = models.IntegerField("Number of products", default=0)
    crawls_per_month = models.IntegerField("Crawls per month", default=0)
    connected_accounts = models.IntegerField("Connected accounts", default=0)
    is_active = models.BooleanField("Is active?", default=False)
    start_day = models.DateTimeField("Start  day")
    end_day = models.DateTimeField("End day")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "User plan"
        verbose_name_plural = "User plans"
