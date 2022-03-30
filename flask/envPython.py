import os
if 'RDS_HOSTNAME' in os.environ:
    DATABASES = {
        'default': 
        {
            'ENGINE': 'postgres',
            'NAME': os.environ['smart-shoppers'],
            'USER': os.environ['smartshoppers'],
            'PASSWORD': os.environ['Smartsho33ers2022'],
            'HOST': os.environ['smart-shoppers.cqq5zn6lxhjd.us-east-1.rds.amazonaws.com'],
            'PORT': os.environ['5432'],
        }
    }