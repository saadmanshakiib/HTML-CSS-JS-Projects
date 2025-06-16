package BusTicket.Ticket.User;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    private long id;
    private String email;
    private String pass;

    public User(){}

    public void setId(long id){
        this.id = id;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setPass(String pass){
        this.pass = pass;
    }

    public long getId(){return this.id;}
    public String getEmail(){return this.email;}
    public String getPass(){return this.pass;}
}
