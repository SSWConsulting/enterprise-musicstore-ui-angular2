using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Caching.Memory;
using SSW.MusicStore.Models;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Authorization;

namespace SSW.MusicStore.Controllers
{
    public class HomeController : Controller
    {
        [FromServices]
        public MusicStoreContext DbContext { get; set; }

        [FromServices]
        public IMemoryCache Cache { get; set; }

		[HttpGet]
		[Route("api/ping")]
		public string Ping()
		{
			return "Pong. You accessed an unprotected endpoint.";
		}

		[HttpGet]
		[Authorize(ActiveAuthenticationSchemes = "Bearer")]
		[Route("api/secured/ping")]
		public object SecuredPing()
		{
			return new
			{
				message = "Pong. You accessed a protected endpoint.",
				claims = User.Claims.Select(c => new { c.Type, c.Value })
			};
		}

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