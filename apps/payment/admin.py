from django.contrib import admin

from apps.payment.models import NumberOfProducts, CrawlsPerMonth, ConnectedAccounts, PaymentHistory

admin.site.register(NumberOfProducts)
admin.site.register(CrawlsPerMonth)
admin.site.register(ConnectedAccounts)
admin.site.register(PaymentHistory)
