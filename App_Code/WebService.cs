using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }

       [WebMethod]
       public List<tblUnitsGP> getGPSStub(string recordId) {
           // public string getSubByCatId(string recordId) {

           var id = Convert.ToInt32(recordId);

           using (DB_14781_schoolsEntities context = new DB_14781_schoolsEntities()) {
               var units = (from a in context.tblUnitsGPS
                            select a).Take(1);

               var ret = units.ToList();

               return ret;

           }
     
       }

       [WebMethod]
       public int SaveGPS(tblUnitsGP record) {

         //  int EventId;
           int recId = 0;

         //  int recId = record.id;

           using (DB_14781_schoolsEntities context = new DB_14781_schoolsEntities()) {
               // incidentId = System.Convert.ToInt32(record.incident_id);

               if (recId > 0) {
 


               } else {
                   //do add
                   //   mode = "add";

                //   int intSiteId = System.Convert.ToInt32(siteId);
                   var newIdString = "";
                   int idTemp = 0;
                   var queryAdd = (from c in context.tblUnitsGPS
                                //   where c.siteId == intSiteId
                                   select c);
                   var ret = queryAdd.Take(1).ToList();
                   tblUnitsGP newRec = new tblUnitsGP();
                   foreach (var prop in ret.First().GetType().GetProperties()) {
                       var field = prop.Name;
                       if (field == "EntityState") {
                           break;
                       }


                       if (field == "appended_datetime") {

                           DateTime dt = System.DateTime.Now;
                           newRec.GetType().GetProperty(field).SetValue(newRec, dt, null);

                       } 

                       
                       else {

                       //    var ftype = field.GetType();
                           var newVal = record.GetType().GetProperty(field).GetValue(record, null);
                          // float addVal = Convert.t
                          // var newVal = intSite;

                           newRec.GetType().GetProperty(field).SetValue(newRec, newVal, null);

                       }

                   }

                   try {
                       // context.AddTotbl_rptNinetyMinIncident(newRec);
                       context.tblUnitsGPS.Add(newRec);
                       context.SaveChanges();

                   } catch {
                       throw new Exception("Could not save changes.");
                   }

              
                   return 1;
               }

               return 1;
           }

       }


}
                      
