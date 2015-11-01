using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Caching.Memory;
using SSW.MusicStore.API.Models;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Authorization;

namespace SSW.MusicStore.API.Controllers
{
    public class HomeController : Controller
    {

		public  IActionResult Index()
        {     
            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }

        public IActionResult StatusCodePage()
        {
            return View("~/Views/Shared/StatusCodePage.cshtml");
        }

        public IActionResult AccessDenied()
        {
            return View("~/Views/Shared/AccessDenied.cshtml");
        }

    }
}