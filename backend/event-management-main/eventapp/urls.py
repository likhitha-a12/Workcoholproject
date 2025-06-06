from django.contrib import admin
from django.urls import path, include
from . import views
from routers import router
urlpatterns = [
    path("admin/", admin.site.urls),

    path('api/', include((router.urls, 'core_api'), namespace='core_api')),
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('events/',views.events,name='events'),
    path('booking/',views.booking,name='booking'),
    path('contact/',views.contact,name='contact'),
]


