using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieList.Models
{
    public class MovieDetails
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsReleased { get; set; }
        public bool IsWatched { get; set; }
    }
}