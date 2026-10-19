# Design direction (2026 redesign)

Design Read: personal portfolio for collaborators, students, partners and investors, editorial and warm, dials ENERGY 2 / RHYTHM 3 / MOTION 2.

Reasons, one line each:
- The night photo of the Balinese temple gate is the full-bleed hero background, as on the first site; a navy wash keeps the text readable. The Tokyo skyline sits behind the contact band.
- Royal navy (#0B2A5B) for the header, hero and contact band, over a cool off-white page (#F4F6FA) with navy ink: brings back the night-blue and orange feel of the first site, which used night photos of Bali and Tokyo.
- Orange (#F0642D fills, #B23A08 for text on light, #FF8A4C on navy): the old site's orange; used for buttons, links, year labels and the typing caret only. Dark mode is a working toggle because there is no brand reason for a fixed theme.
- Fraunces (headings) with DM Sans (body): a warm serif matches the "full-time learner" voice; the sans keeps long text readable.
- Layout changes every section (hero split, ruled role list, tinted research block, photo plus list, three text columns, dark contact band): sections follow the content, not a template.
- Identity motif: the orange offset shadow on button hover, plus the "^__^" sign-off kept from the old site, plus the "^__^" sign-off kept from the old site.
- No stats, testimonials, logos or icon library: nothing is shown that cannot be verified.
- Motion: hover states, plus one hero effect. In the email line, "iga" stays and the back of the address types through the four addresses (@sakumedis.id, @pukulenam.id, narendrainp@telkomuniversity.ac.id, .narendra@gmail.com). It loops, has a Pause button, is skipped for reduced-motion visitors, and screen readers get a plain "my email addresses" label. Everything else is still.

Rules: vanilla HTML/CSS/JS, no framework, no build step. Content must come from Iga or be labelled as a placeholder.
