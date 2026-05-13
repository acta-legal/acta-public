# Notificare privind reutilizarea informațiilor din sectorul public — N-Lex

_Template — NOT sent. Held for future use if the Ministry requests dialogue or if we want to formalize access._

_Ultima revizuire template: 2026-05-13_

---

**Către:** Ministerul Justiției — Direcția Elaborare Acte Normative / Administrator portal N-Lex
**De la:** Acta Legal — `ingest@acta-legal.ro`
**Data:** [data trimiterii]
**Subiect:** Notificare privind reutilizarea textelor legislative publicate pe `legislatie.just.ro`

Stimată Doamnă / Stimate Domnule,

În temeiul **Legii nr. 109/2007 privind reutilizarea informațiilor din instituțiile publice** (transpunere a Directivei 2003/98/CE privind reutilizarea informațiilor din sectorul public), al **Legii nr. 8/1996 art. 9 lit. b** (textele oficiale de natură legislativă nefiind protejate de dreptul de autor) și al clauzei de reutilizare publicată pe `legislatie.just.ro/Public/Termeni`, vă informăm cu privire la activitatea noastră automatizată de preluare a textelor legislative publicate pe portalul N-Lex.

## Despre Acta Legal

Acta Legal este un asistent de cercetare juridică dedicat avocaților români, care construiește un corpus local de legislație pentru a oferi căutare și asistență la redactare bazate pe inteligență artificială.

## Ce preluăm

Preluăm următoarele tipuri de conținut de pe portalul `legislatie.just.ro`:

- Acte normative complete, prin API-ul SOAP public (`/apiws/FreeWebService.svc/SOAP`)
- Textul integral al actelor, prin pagina HTML `/Public/DetaliiDocument/{id}`

Nu preluăm date cu caracter personal, informații clasificate, sau conținut neatribuit domeniului public.

## Politica noastră de ritm

- **Plafon absolut:** 60 de cereri pe minut, cu pacing de 1 cerere/secundă și burst 3.
- **Back-off automat** la orice răspuns HTTP 429 sau 5xx, cu circuit-breaker activ timp de 1 oră.
- **Identificare transparentă:** toate cererile trimit antetul `User-Agent: Acta-Legal/1.0 (+https://acta-legal.ro/ingestion; ingest@acta-legal.ro)` și `From: ingest@acta-legal.ro`.

Politica completă este publicată la `https://acta-legal.ro/ingestion`.

## Ce vă cerem

Nu vă cerem nimic. Această notificare are rol de transparență. Dacă aveți solicitări sau preferințe privind ritmul, fereastra orară, sau metodele noastre de acces, vă rugăm să ne contactați la `ingest@acta-legal.ro`. Vom răspunde în maxim 5 zile lucrătoare și vom ajusta comportamentul în termen de 1 zi lucrătoare de la primirea unei solicitări.

Cu stimă,
[Nume] — Acta Legal
`ingest@acta-legal.ro`
