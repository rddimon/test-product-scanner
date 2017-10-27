from django.db import models

from apps.account.models import User


class NumberOfProducts(models.Model):
    name = models.CharField("Name", max_length=200, default='')
    price = models.DecimalField("Price", max_digits=6, decimal_places=2, default=0)
    order = models.IntegerField("Order", default=0)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Number of product"
        verbose_name_plural = "Numbers of product"
        ordering = ["order"]


class CrawlsPerMonth(models.Model):
    name = models.CharField("Plan name", max_length=200, default='')
    count = models.IntegerField("Count", default=0)
    order = models.IntegerField("Order", default=0)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Crawl per month"
        verbose_name_plural = "Crawls per month"
        ordering = ["order"]


class ConnectedAccounts(models.Model):
    name = models.CharField("Plan name", max_length=200, default='')
    price = models.DecimalField("price", max_digits=6, decimal_places=2, default=0)
    order = models.IntegerField("Order", default=0)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Connected account"
        verbose_name_plural = "Connected accounts"
        ordering = ["order"]


class PaymentHistory(models.Model):
    user = models.ForeignKey(User)
    amount = models.DecimalField("Amount", max_digits=6, decimal_places=2, default=0)
    payment_date = models.DateTimeField("Payment date")

    def __str__(self):
        return "{}-{}".format(self.user, self.payment_date)

    class Meta:
        verbose_name = "Payment history"
        verbose_name_plural = "Payments history"
        ordering = ["-payment_date"]
