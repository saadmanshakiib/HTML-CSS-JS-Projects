package BusTicket.Ticket.Controller;


import BusTicket.Ticket.Repo.UserRepository;
import BusTicket.Ticket.User.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email Already Exists");
        }
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Account Created");
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody User user) {
        User userExists = userRepository.findByEmail(user.getEmail());
        if (userExists != null && user.getPass().equals(user.getPass())) {
          return  ResponseEntity.ok("Login Successfull");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error");
    }
}

