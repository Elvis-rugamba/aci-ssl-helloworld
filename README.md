# Azure Container Instances Hello World with SSL

This sample is a very simple NodeJS application used to demonstrate [Azure Container Instances](https://azure.microsoft.com/services/container-instances/) with SSL.

The packaged version of the application is [available on Docker Hub](https://hub.docker.com/r/containerinstance/helloworld/).

A certificate and a password are required as two files for the SSL connection. If the image is deployed with [the Azure template]( https://github.com/Azure/azure-quickstart-templates/tree/master/201-aci-linuxcontainer-volume-secret), the certificate and password will be mounted as two files inside the container, and Node.js will read these two files and setup the SSL connection.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
