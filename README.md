# IPFS_tool

This is an IPFS tool for testing the availability of gateways and previewing ipfs resources.

![logo](https://jiajiajiang.github.io/staticRepo/IPFS_tool/logo.png)

[demo](https://jiajiajiang.github.io/IPFS_tool/)

# Features

## Gateway Testing

* Gateways' availability testing and resources' availability testing.
* Availability testing of resources in the `source view` block from each gateways.

## source view

* For resource viewing.
* When you click the `view` button, the gateway in the  `Current gateway` filed will be used to load the resource.
* When you click the `test then view` button, this tool will find an available gateway firstly.

### URL Hash parameter

* `path` : Will be filled into the path filed in the source view block. This tool will load the resource automaticly.For example: [/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd](https://jiajiajiang.github.io/IPFS_tool/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd)
* `gateway` : Set the default gateway on this page only. For example: [/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd&gateway=https://ipfs.io](https://jiajiajiang.github.io/IPFS_tool/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd&gateway=https://ipfs.io)
