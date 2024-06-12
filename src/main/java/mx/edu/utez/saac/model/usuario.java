package mx.edu.utez.saac.model;

public class usuario {
    private String nombre;
    private String contra;

    public usuario() {
    }

    public usuario(String nombre, String contra) {
        this.nombre = nombre;
        this.contra = contra;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getContra() {
        return contra;
    }

    public void setContra(String contra) {
        this.contra = contra;
    }
}
