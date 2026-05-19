# the-last-bit

Everything here is **handcoded** — the only file that isn’t is this README.

Raw Node.js HTTP servers.

1. [rawnode-server](https://github.com/srivtx/the-last-bit/tree/main/rawnode-server) — basic routing (`/`, `/home`, `/about`) and 404
2. [rawnode-evolve](https://github.com/srivtx/the-last-bit/tree/main/rawnode-evolve) — same server, refactored with a `sendjson` helper
3. [rawnode-method-based-routing](https://github.com/srivtx/the-last-bit/tree/main/rawnode-method-based-routing) — routes by path and HTTP method (GET / 405 for wrong method)
