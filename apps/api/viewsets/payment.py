# ViewSets define the view behavior.
from rest_framework import viewsets

from apps.api.serializers.payment import NumberOfProductsSerializer, CrawlsPerMonthSerializer, \
    ConnectedAccountsSerializer
from apps.payment.models import NumberOfProducts, CrawlsPerMonth, ConnectedAccounts


class NumberOfProductsViewSet(viewsets.ModelViewSet):
    queryset = NumberOfProducts.objects.all()
    serializer_class = NumberOfProductsSerializer


class CrawlsPerMonthViewSet(viewsets.ModelViewSet):
    queryset = CrawlsPerMonth.objects.all()
    serializer_class = CrawlsPerMonthSerializer


class ConnectedAccountsViewSet(viewsets.ModelViewSet):
    queryset = ConnectedAccounts.objects.all()
    serializer_class = ConnectedAccountsSerializer
