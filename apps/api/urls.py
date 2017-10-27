from django.conf.urls import url, include
from rest_framework import routers

from apps.api import views
from apps.api.viewsets import payment

router = routers.DefaultRouter()

router.register(r'number-of-products', payment.NumberOfProductsViewSet)
router.register(r'crawls-per-month', payment.CrawlsPerMonthViewSet)
router.register(r'connected-accounts', payment.ConnectedAccountsViewSet)

urlpatterns = [
    url(r'^payment/', include(router.urls)),
    url(r'^validate$', views.validate),
    url(r'^update', views.update),
]
