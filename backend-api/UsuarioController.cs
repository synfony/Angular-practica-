using Microsoft.AspNetCore.Mvc;

namespace UsuariosAPI.Controllers;

[ApiController]
[Route("api/v1/usuario")]
public class UsuarioController : ControllerBase
{
    private static List<Usuario> _usuarios = new()
    {
        new Usuario { Id = 1, Nombre = "Juan Pérez" },
        new Usuario { Id = 2, Nombre = "María García" },
        new Usuario { Id = 3, Nombre = "Carlos López" }
    };

    private static int _nextId = 4;

    [HttpGet]
    public ActionResult<IEnumerable<Usuario>> GetAll()
    {
        return Ok(_usuarios);
    }

    [HttpPost]
    public ActionResult<Usuario> Create([FromBody] Usuario usuario)
    {
        if (string.IsNullOrWhiteSpace(usuario.Nombre))
        {
            return BadRequest("El nombre es requerido");
        }

        usuario.Id = _nextId++;
        _usuarios.Add(usuario);
        return CreatedAtAction(nameof(GetAll), new { id = usuario.Id }, usuario);
    }
}
