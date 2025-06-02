export function signup(email: string, password: string) {
  localStorage.setItem('user', JSON.stringify({ email, password }));
}

export function login(email: string, password: string): boolean {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user.email === email && user.password === password;
}