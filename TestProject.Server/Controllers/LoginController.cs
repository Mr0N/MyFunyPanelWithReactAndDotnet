using System;                             // DateTime, інші базові типи
using System.Text;                        // Encoding.ASCII
using System.Security.Claims;             // Claim, ClaimsIdentity
using Microsoft.AspNetCore.Authorization; // [Authorize]
using Microsoft.AspNetCore.Mvc;           // ControllerBase, IActionResult (якщо в контролері)
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using TestProject.Server.Model; // IConfiguration (якщо читаєте секрет з конфігурації)

namespace MyFunyPanelWithReactAndDotnet.Controllers
{
    public record AutRecord(string login, string password);
    [ApiController]
    [Route("/api")]
    public class LoginController(ConfigAut config) : Controller
    {
        [Route("data")]
        public IActionResult Data()
        {
            return Ok("ok");
        }
        [Route("login")]
        public IActionResult Index([FromBody]AutRecord rec)
        {
            if(rec.login != "1" && rec.password != "1")
            {
                return NotFound();
            }
            var tokenHandler = new JwtSecurityTokenHandler();

            var keyData = config.GetBytesKey();
            var tokenDescriptor = new SecurityTokenDescriptor
            { 
                Subject = new ClaimsIdentity(new Claim[] 
                { new Claim(ClaimTypes.Name, "user"),
                    new Claim(ClaimTypes.Role, "Admin") }),
                Expires = DateTime.UtcNow.AddHours(1), 
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyData), 
                SecurityAlgorithms.HmacSha256Signature) };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new { token = tokenHandler.WriteToken(token) });
           
        }
    }
}
