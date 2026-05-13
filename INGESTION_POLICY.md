# Politica de Ingestie / Ingestion Policy

_Ultima actualizare / Last updated: 2026-05-13_

---

## 🇷🇴 Română

### Ce este Acta

Acta este un asistent de cercetare juridică destinat avocaților români. Construim un corpus local de legislație și jurisprudență din surse publice ale statului român, pentru căutare și asistență la redactare bazate pe inteligență artificială.

### Ce preluăm și de unde

| Sursă | Tip conținut | Metodă |
|---|---|---|
| `legislatie.just.ro` | Acte normative (legi, OUG, OG, HG, ordine, decizii) | SOAP API + HTML al paginilor de detaliu |
| `scj.ro` | Decizii ale ÎCCJ (camere, RIL, HP) | HTML centralizatoare + PDF-uri |
| `ccr.ro` | Decizii ale Curții Constituționale | Indirect prin `legislatie.just.ro` |

Lista structurată completă se găsește în [`sources.yml`](./sources.yml).

### Ritm și politețe

- **Plafon absolut:** nu depășim 60 de cereri pe minut către niciun portal public (corespunzător implementării de referință [Ansvar Legal Romanian Law MCP](https://github.com/Ansvar-Systems/Romanian-law-mcp)).
- **Pacing:** token bucket cu refill la 1 cerere/secundă și burst 3.
- **Back-off automat:** la orice răspuns HTTP `429` sau `5xx`, un circuit-breaker local suspendă traficul către acea sursă timp de 1 oră.
- **Identificare:** toate cererile trimit `User-Agent: Acta-Legal/1.0 (+https://acta-legal.ro/ingestion; ingest@acta-legal.ro)` și antetul `From: ingest@acta-legal.ro`.

### Temei legal

- **Legea 8/1996 privind dreptul de autor, art. 9 lit. b** — textele oficiale de natură legislativă nu beneficiază de protecția dreptului de autor.
- **Legea 109/2007 privind reutilizarea informațiilor din sectorul public** (transpune Directiva 2003/98/CE) — confirmă dreptul de reutilizare.
- **`legislatie.just.ro/Public/Termeni`** — permite expres reutilizarea textelor legale, în limita clauzei că doar versiunea tipărită în Monitorul Oficial este autentică.

### Atribuire

Fiecare citare produsă în aplicația Acta linkează către pagina sursă autoritativă pe `legislatie.just.ro` sau portalul original al emitentului. Utilizatorul este informat că versiunea oficială rămâne cea din Monitorul Oficial.

### Contact

- **Probleme de ingestie / acces la date:** `ingest@acta-legal.ro`
- **SLA răspuns:** 5 zile lucrătoare.

### Angajament de opt-out

Dacă un operator al unei surse publice ne solicită să reducem ritmul sau să încetăm preluarea dintr-o sursă specifică, vom executa această solicitare în termen de 1 zi lucrătoare.

---

## 🇬🇧 English

### What Acta is

Acta is a legal research assistant for Romanian attorneys. We build a local corpus of Romanian legislation and case law from public-sector sources, for AI-assisted search and drafting.

### What we fetch, and from where

See the Romanian table above or the structured [`sources.yml`](./sources.yml).

### Rate commitment

- **Absolute ceiling:** never exceed 60 requests per minute to any single upstream, matching the [Ansvar Legal Romanian Law MCP](https://github.com/Ansvar-Systems/Romanian-law-mcp) reference implementation.
- **Pacing:** token bucket refilling at 1 req/sec with burst 3.
- **Automatic back-off:** on any HTTP `429` or `5xx`, a local circuit breaker suspends traffic to that source for 1 hour.
- **Identification:** all requests carry `User-Agent: Acta-Legal/1.0 (+https://acta-legal.ro/ingestion; ingest@acta-legal.ro)` and `From: ingest@acta-legal.ro`.

### Legal basis

- **Law 8/1996 on copyright, Article 9(b)** — official legal texts are excluded from copyright protection.
- **Law 109/2007 on public-sector information re-use** (transposes EU Directive 2003/98/EC) — affirms our right to re-use.
- **`legislatie.just.ro/Public/Termeni`** — explicitly permits reuse of legal texts, subject to acknowledging that only the printed Monitorul Oficial version is authoritative.

### Attribution

Every citation produced in the Acta product links back to the authoritative source page on `legislatie.just.ro` or the issuing body's original portal. Users are reminded that the Monitorul Oficial printed version remains the authoritative text.

### Contact

- **Ingestion / data-access concerns:** `ingest@acta-legal.ro`
- **Response SLA:** 5 business days.

### Opt-out commitment

If an operator of a public source asks us to reduce rate or cease ingestion from a specific source, we will do so within 1 business day.
