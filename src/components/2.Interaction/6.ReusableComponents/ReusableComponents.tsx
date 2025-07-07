import { Button } from "./Button";
import { Input } from "./Input";
import { Card } from "./Card";

export function ReusableComponents() {
  return (
    <Card title="Login">
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button>Login</Button>
    </Card>
  );
}
