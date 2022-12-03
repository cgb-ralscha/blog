package ch.rasc.validation;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Registration {

  @NotBlank
  @Size(min = 2, max = 30)
  private String username;

  @NotBlank
  @Email
  private String email;

  @Min(18)
  @NotNull
  private Integer age;

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Integer getAge() {
    return this.age;
  }

  public void setAge(Integer age) {
    this.age = age;
  }

  @Override
  public String toString() {
    return "Registration [username=" + this.username + ", email=" + this.email + ", age="
        + this.age + "]";
  }

}
