package mx.edu.utez.saac.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import mx.edu.utez.saac.dao.usuarioDao;
import mx.edu.utez.saac.model.usuario;

import java.io.IOException;

@WebServlet(name = "usuarioServlet", value = "/login")
public class usuarioServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Conseguir la info del formulario, donde los inputs se llamen así:
        String nombre = req.getParameter("nombre");
        String contra = req.getParameter("contra");
        usuarioDao dao = new usuarioDao();
       // usuarioDao usr = dao.getOne(nombre,contra);
        // si el usuario esta vacío,
        if (dao.getOne(nombre,contra) == null) {
            // es porque no existe en la bd
            System.out.println("El usuario " + nombre + "no existe en la base de datos");
        }else{
            // si existe en la bd
            System.out.println("El usuario " + nombre + " si esta en la base de datos");
        }
    }

    @Override
    public void destroy() {
        super.destroy();
    }

    @Override
    public void init() throws ServletException {
        super.init();
    }
}
