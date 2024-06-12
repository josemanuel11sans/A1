package mx.edu.utez.saac.dao;

import mx.edu.utez.saac.model.usuario;
import mx.edu.utez.saac.utils.DatabaseConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class usuarioDao {
    // CRUD para usuario
    // Read para un usuario
    public usuario getOne(String nombre, String contra){
        usuario usuario = new usuario();
        String query = "select * from usuario where nombre = ? and contra = ?;";
        try {
            Connection con = DatabaseConnectionManager.getConnection();
            PreparedStatement ps = con.prepareStatement(query); // forma de evitar que inyecten query
            ps.setString(1,nombre);
            ps.setString(2,contra);
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                usuario.setNombre(rs.getString("nombre"));
                usuario.setContra(rs.getString("contra"));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return usuario;
    }
}
