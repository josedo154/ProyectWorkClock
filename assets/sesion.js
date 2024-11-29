let sesionCord =new Cordinador("root", "1234", "pubUser1", "Empresa A", "correo1@empresa.com", "12345678A", "Juan", "Pérez", "López", "600123456", "1985-05-12");

sesionCord.listaEmpleados.push(
    new Empleado("root", "1234", "correo1@empresa.com", "11223344A", "Oficina 1", "Carlos", "Molina", "García", "650123456", "1984-01-15", "cord2"),
    new Empleado("emp3", "claveEmp_3", "correo3@empresa.com", "33445566C", "Oficina 3", "José", "Fernández", "Ramírez", "651123456", "1987-09-10", "cord2"),
    new Empleado("emp4", "claveEmp_4", "correo4@empresa.com", "44556677D", "Oficina 4", "Ana", "Torres", "García", "651654321", "1995-03-17", "cord2"),
    new Empleado("emp5", "claveEmp_5", "correo5@empresa.com", "55667788E", "Oficina 5", "Luis", "Sánchez", "Jiménez", "652123456", "1985-07-07","cord2"),
    new Empleado("emp6", "claveEmp_6", "correo6@empresa.com", "66778899F", "Oficina 6", "Carmen", "Martín", "Fernández", "652654321", "1993-11-30","cord2"),
    new Empleado("emp7", "claveEmp_7", "correo7@empresa.com", "77889900G", "Oficina 7", "José", "López", "Muñoz", "653123456", "1989-02-14","cord2"),
);

let sesionEmp = new Empleado("root", "1234", "correo1@empresa.com", "11223344A", "Oficina 1", "Carlos", "Molina", "García", "650123456", "1984-01-15", "cord2");
sesionEmp.faltas.push("19-09-2024: 5 min tarde")
sesionEmp.faltas.push("2-09-2024: 5 min adelantado")