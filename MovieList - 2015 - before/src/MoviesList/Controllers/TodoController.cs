using Microsoft.AspNet.Mvc;
using MoviesList.Models;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.Controllers
{
	[Route("api/todos")]
	public class TodoController : Controller
    {
		static readonly List<TodoItem> _items = new List<TodoItem>()
		{
			new TodoItem { Id = 1, Title = "First Item" }
		};

		[HttpGet]
		public IEnumerable<TodoItem> GetAll()
		{
			return _items;
		}
	}
}
