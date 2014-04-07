//------------------------------------------------------------------------------
// <copyright file="WebDataService.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//------------------------------------------------------------------------------
using System;
using System.Data.Services;
using System.Data.Services.Common;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Web;


//public class WcfDataService  {
public class WcfDataService : DataService<DB_14781_schoolsEntities> {
    // This method is called only once to initialize service-wide policies.
    //public static void InitializeService(DataServiceConfiguration config) {
    //    // TODO: set rules to indicate which entity sets and service operations are visible, updatable, etc.
    //    // Examples:
    //    // config.SetEntitySetAccessRule("MyEntityset", EntitySetRights.AllRead);
    //    // config.SetServiceOperationAccessRule("MyServiceOperation", ServiceOperationRights.All);
    //    config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V3;
    //}
       [WebGet]
    public string HelloWorld() {

        return "hello";
    }



}
