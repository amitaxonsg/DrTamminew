# Dr Tammi Website Image Asset Map

The Next.js pages are already wired to the filenames below. Place the approved images in `assets/images/`, then rebuild. `scripts/prepare-assets.mjs` copies them to `public/assets/images/`.

## Supplied clinic photographs

| Website filename | Supplied photograph | Recommended use |
|---|---|---|
| `clinic-waiting-area-1.jpg` | Wide waiting room view with two black sofas and coffee table | Homepage process section and clinic gallery |
| `clinic-reception.jpg` | Reception counter, printer and waiting-room table | Clinic hero and contact page |
| `clinic-waiting-area-2.jpg` | Closer waiting room view with sofas and paintings | Clinic gallery |
| `clinic-entrance.jpg` | Clinic entrance, glass doors and Dr Tammi Quek sign | Homepage location section and clinic gallery |
| `dr-tammi-current.jpg` | Current portrait supplied by Dr Tammi | Temporary homepage and biography portrait |

The current portrait can be used during preview. A professionally framed version with a neutral clinic background may replace it later without changing code.

## AI or commissioned image placeholders

These filenames are referenced by the website and can be replaced later:

- `services-family-consultation.jpg`
- `concerns-child-development.jpg`
- `international-family-approved.jpg`
- `schools-professionals-approved.jpg`
- `resources-parent-guide.jpg`
- `ai-guidance-family.jpg`

### Image direction

- Warm, respectful and natural rather than staged
- Singapore-based, inclusive and multi-racial families
- A balanced mix of Chinese, Malay, Indian, mixed-race and international/expatriate families
- Modern clinic or learning settings with calm, soft lighting
- No distressed-child imagery, diagnostic labels, medical props or exaggerated emotion
- Do not imply that AI is diagnosing, assessing or treating a child
- No actual patients should be shown unless written consent and usage rights are confirmed

## Official brand asset

The build script downloads the official logo from:

`https://drtammiquek.com/paediatrics-clinic/wp-content/uploads/2021/07/dr-tammi-logo-new.png`

The deployed local path is:

`/assets/brand/dr-tammi-logo-new.png`
