-- Drop the existing restrictive policy
drop policy if exists "Users can view their own data" on public.users;

-- Create a new policy that allows anyone to read users
create policy "Anyone can view users" on public.users
  for select
  using (true);