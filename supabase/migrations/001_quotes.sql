-- Quote requests from mountaincar.is contact form
create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  pickup_date date not null,
  return_date date not null,
  vehicle text,
  message text,
  created_at timestamptz default now()
);

-- Row level security
alter table quotes enable row level security;

-- Only service role can read quotes (admin access)
create policy "Service role full access" on quotes
  for all using (auth.role() = 'service_role');

-- Allow anonymous inserts from the website form
create policy "Anyone can insert quote" on quotes
  for insert with check (true);
