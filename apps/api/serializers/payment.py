# Serializers define the API representation.
from rest_framework import serializers

from apps.payment.models import NumberOfProducts, CrawlsPerMonth, ConnectedAccounts, PaymentHistory


class NumberOfProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NumberOfProducts
        fields = ('name', 'price', 'order')


class CrawlsPerMonthSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrawlsPerMonth
        fields = ('name', 'count', 'order')


class ConnectedAccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectedAccounts
        fields = ('name', 'price', 'order')


class PaymentHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentHistory
        fields = ('user', 'amount', 'payment_date')
