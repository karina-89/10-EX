using empleadosAngular.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace empleadosAngular.Models
{
    public class Empleado
    {
        [JsonConverter(typeof(IntToStringConverter))]
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellidos { get; set; }
        public string Cargo { get; set; }
        [JsonConverter(typeof(DoubleToStringConverter))]
        public double Sueldo { get; set; }
    }
}
