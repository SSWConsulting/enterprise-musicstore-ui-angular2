using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SSW.MusicStore.API.Services
{
    public interface IEmailSender
    {
		/// <summary>
		/// Sends email to the specified email address
		/// </summary>
		/// <param name="email">Email address</param>
		/// <param name="subject">Message subject</param>
		/// <param name="message">Actual message to send</param>
		/// <returns>Result of the operation</returns>
        Task SendEmailAsync(string email, string subject, string message);
    }
}
