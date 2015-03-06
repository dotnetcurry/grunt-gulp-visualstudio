using MovieList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieList.Controllers
{
    [RoutePrefix("api/movies")]
    public class MoviesController : ApiController
    {
        MoviesRepository repository;

        public MoviesController()
        {
            repository = new MoviesRepository();
        }

        // GET api/<controller>
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(repository.GetAll());
        }

        // POST api/<controller>
        [Route("")]
        public IHttpActionResult Post([FromBody]MovieDetails newMovie)
        {
            var result = repository.Add(newMovie);

            if (result != null)
            {
                return Ok(result);                
            }

            return BadRequest();
        }

        // PUT api/<controller>/5
        [Route("{id:int}")]
        public IHttpActionResult Put(int id, [FromBody]MovieDetails modifiedMovie)
        {
            modifiedMovie.Id = id;

            var result = repository.Update(modifiedMovie);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();
        }

    }
}