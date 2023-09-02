import { axiosInstance, OpenApiClient, OpenApiClientArrayHelper, OpenApiException, OpenApiResponse, MimeTypes, directDownloadConfig } from 'lisecutilityfunctions/lib/api';

import * as conversionLib from 'lisecutilityfunctions/lib/commonfunction';

var Qs = require('qs');




class OpenApiClient_li_sell_v1 extends OpenApiClient {

    constructor(site, instance) {
        super(site, OpenApiClient_li_sell_v1.getServiceName(), instance, "v1");
        this.site = site;
    }

    static getClient(site, instance = null) {
        var key = site + ".li_sell";
        key += ".v1";
        if (instance !== null) {
            key += '.' + instance;
        }
        var service = OpenApiClient.serviceMap.get(key);

        if (service === undefined)
        {
            service = new OpenApiClient_li_sell_v1(site, instance);
            OpenApiClient.serviceMap.set(key, service);
        }
        return service;
    }

    static getServiceName() {
        if (window.config !== undefined && window.config.servicenameSubstitution.li_sell !== undefined ){
            return window.config.servicenameSubstitution.li_sell;
        }

        return 'li_sell';
    }


    async GET_Product(Offset = null, Limit = null, Filter = null, SortBy = null, Select = null, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(Offset, true, [])) {
                throw new OpenApiException("Parameter 'Offset' is not a valid number!");
            }
            
            if (!self.verifyParamIsInteger(Limit, true, [])) {
                throw new OpenApiException("Parameter 'Limit' is not a valid number!");
            }
            
            if (!self.verifyParamIsString(Filter, true, [])) {
                throw new OpenApiException("Parameter 'Filter' is not a valid string!");
            }
            
            if (!self.verifyParamIsString(SortBy, true, [])) {
                throw new OpenApiException("Parameter 'SortBy' is not a valid string!");
            }
            
            if (!self.verifyParamIsStringArray(Select, true, [])) {
                throw new OpenApiException("Parameter 'Select' is not a valid string array!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            if(Offset !== null) queryParams['Offset'] = Offset;
            if(Limit !== null) queryParams['Limit'] = Limit;
            if(Filter !== null) queryParams['Filter'] = Filter;
            if(SortBy !== null) queryParams['SortBy'] = SortBy;
            if(Select !== null) serializedParam['Select'] = OpenApiClientArrayHelper.GET_QUERY_serialized_array(Select, "STYLE_FORM", "Select", true);
            const config = {
                url: self.getUrl(['Product'], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Product', e);
            return e
        }
    }
    
    async POST_Product(body, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: self.getUrl(['Product'], serializedParam),
                method: 'post',
                data: body.getContent(),
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('POST_Product', e);
            return e
        }
    }
    
    async GET_Product_id(id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Product', id], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Product_id', e);
            return e
        }
    }
    
    async PUT_Product_id(body, id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: self.getUrl(['Product', id], serializedParam),
                method: 'put',
                data: body.getContent(),
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('PUT_Product_id', e);
            return e
        }
    }
    
    async DELETE_Product_id(id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Product', id], serializedParam),
                method: 'delete',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('DELETE_Product_id', e);
            return e
        }
    }
    
    async PATCH_Product_id(body, id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: self.getUrl(['Product', id], serializedParam),
                method: 'patch',
                data: body.getContent(),
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Product', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('PATCH_Product_id', e);
            return e
        }
    }
    
    async GET_Favourite(Offset = null, Limit = null, Filter = null, SortBy = null, Select = null, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(Offset, true, [])) {
                throw new OpenApiException("Parameter 'Offset' is not a valid number!");
            }
            
            if (!self.verifyParamIsInteger(Limit, true, [])) {
                throw new OpenApiException("Parameter 'Limit' is not a valid number!");
            }
            
            if (!self.verifyParamIsString(Filter, true, [])) {
                throw new OpenApiException("Parameter 'Filter' is not a valid string!");
            }
            
            if (!self.verifyParamIsString(SortBy, true, [])) {
                throw new OpenApiException("Parameter 'SortBy' is not a valid string!");
            }
            
            if (!self.verifyParamIsStringArray(Select, true, [])) {
                throw new OpenApiException("Parameter 'Select' is not a valid string array!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            if(Offset !== null) queryParams['Offset'] = Offset;
            if(Limit !== null) queryParams['Limit'] = Limit;
            if(Filter !== null) queryParams['Filter'] = Filter;
            if(SortBy !== null) queryParams['SortBy'] = SortBy;
            if(Select !== null) serializedParam['Select'] = OpenApiClientArrayHelper.GET_QUERY_serialized_array(Select, "STYLE_FORM", "Select", true);
            const config = {
                url: self.getUrl(['Favourite'], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Favourite'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Favourite', e);
            return e
        }
    }
    
    async POST_Favourite(body, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: self.getUrl(['Favourite'], serializedParam),
                method: 'post',
                data: body.getContent(),
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Favourite'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('POST_Favourite', e);
            return e
        }
    }
    
    async DELETE_Favourite_id(id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Favourite', id], serializedParam),
                method: 'delete',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Favourite', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('DELETE_Favourite_id', e);
            return e
        }
    }
    
    async POST_Image(body, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: self.getUrl(['Image'], serializedParam),
                method: 'post',
                data: body.getContent(),
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Image'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('POST_Image', e);
            return e
        }
    }
    
    async GET_Image(Offset = null, Limit = null, Filter = null, SortBy = null, Select = null, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(Offset, true, [])) {
                throw new OpenApiException("Parameter 'Offset' is not a valid number!");
            }
            
            if (!self.verifyParamIsInteger(Limit, true, [])) {
                throw new OpenApiException("Parameter 'Limit' is not a valid number!");
            }
            
            if (!self.verifyParamIsString(Filter, true, [])) {
                throw new OpenApiException("Parameter 'Filter' is not a valid string!");
            }
            
            if (!self.verifyParamIsString(SortBy, true, [])) {
                throw new OpenApiException("Parameter 'SortBy' is not a valid string!");
            }
            
            if (!self.verifyParamIsStringArray(Select, true, [])) {
                throw new OpenApiException("Parameter 'Select' is not a valid string array!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            if(Offset !== null) queryParams['Offset'] = Offset;
            if(Limit !== null) queryParams['Limit'] = Limit;
            if(Filter !== null) queryParams['Filter'] = Filter;
            if(SortBy !== null) queryParams['SortBy'] = SortBy;
            if(Select !== null) serializedParam['Select'] = OpenApiClientArrayHelper.GET_QUERY_serialized_array(Select, "STYLE_FORM", "Select", true);
            const config = {
                url: self.getUrl(['Image'], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Image'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Image', e);
            return e
        }
    }
    
    async GET_Image_id(id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Image', id], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Image', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Image_id', e);
            return e
        }
    }
    
    async DELETE_Image_id(id, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(id, false, [])) {
                throw new OpenApiException("Parameter 'id' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Image', id], serializedParam),
                method: 'delete',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'id': id,
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Image', id], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('DELETE_Image_id', e);
            return e
        }
    }
    
    async GET_Version(activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            const config = {
                url: self.getUrl(['Version'], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Version'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Version', e);
            return e
        }
    }
    
    async GET_Statistics(recordsCount = null, activateDownloadManager = false, uniqueKey = null, isDownload = false, attachCookies = false) {
        
        var self = this;

        try {
            if (!self.verifyParamIsInteger(recordsCount, true, [])) {
                throw new OpenApiException("Parameter 'recordsCount' is not a valid number!");
            }
            
            var headers = {};
            var queryParams = {};
            var serializedParam = {};
            if(recordsCount !== null) queryParams['recordsCount'] = recordsCount;
            const config = {
                url: self.getUrl(['Statistics'], serializedParam),
                method: 'get',
                responseType: 'arraybuffer',
                headers: headers,
                params: queryParams,
                withCredentials: attachCookies,
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
                onUploadProgress: function (progressEvent) {
                    // console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    // console.log(progressEvent, 'completed');
                }
            }
            if (isDownload != null && isDownload === true) {
                const downloadParamData = {
                    'headers': headers,
                    'queryParams': queryParams,
                }

                var url = self.getUrl(['Statistics'], queryParams);
                return (directDownloadConfig(downloadParamData, url))
            }
            else {
                return axiosInstance.request(config)
            }
        }
        catch (e) {
            self.logResponse('GET_Statistics', e);
            return e
        }
    }
    
}

export default OpenApiClient_li_sell_v1;
