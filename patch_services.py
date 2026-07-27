from pathlib import Path
import re

base = Path('components')
services_path = base / 'services.tsx'
contact_path = base / 'contact.tsx'

# Patch services.tsx
text = services_path.read_text(encoding='utf-8')
pattern = re.compile(r"const services = \[.*?\];\n(export default function Services\()", re.S)
if not pattern.search(text):
    raise SystemExit('ERROR: inline services array not found in services.tsx')
text = pattern.sub("import services from './servicesData'\n\n\1", text, count=1)
old_anchor = '''                                    <a
                                        href="#contact"
                                        className="inline-block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                                    >
                                        Book Now
                                    </a>'''
new_anchor = '''                                    <a
                                        href={`/?service=${encodeURIComponent(service.name)}#contact`}
                                        className="inline-block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                                    >
                                        Book Now
                                    </a>'''
if old_anchor not in text:
    raise SystemExit('ERROR: Book Now anchor block not found in services.tsx')
text = text.replace(old_anchor, new_anchor, 1)
services_path.write_text(text, encoding='utf-8')
print('services.tsx patched')

# Patch contact.tsx
text = contact_path.read_text(encoding='utf-8')
old_import = "import { useState } from 'react'\n"
new_import = "import { useState, useEffect } from 'react'\nimport { useSearchParams } from 'next/navigation'\n"
if old_import not in text:
    raise SystemExit('ERROR: useState import line not found in contact.tsx')
text = text.replace(old_import, new_import, 1)
marker = "  const [isSubmitting, setIsSubmitting] = useState(false)\n  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(\'idle\')\n\n  const handleChange ="
replacement = "  const [isSubmitting, setIsSubmitting] = useState(false)\n  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(\'idle\')\n\n  const searchParams = useSearchParams()\n\n  useEffect(() => {\n    const svc = searchParams?.get('service')\n    if (svc) {\n      setFormData(prev => ({ ...prev, service: svc }))\n    }\n\n    const onHashService = () => {\n      const url = new URL(window.location.href)\n      if (url.hash === '#contact') {\n        const svcFromParam = url.searchParams.get('service')\n        if (svcFromParam) {\n          setFormData(prev => ({ ...prev, service: svcFromParam }))\n        }\n      }\n    }\n\n    onHashService()\n    window.addEventListener('hashchange', onHashService)\n    return () => window.removeEventListener('hashchange', onHashService)\n  }, [searchParams])\n\n  const handleChange ="
if marker not in text:
    raise SystemExit('ERROR: marker not found for effect insertion in contact.tsx')
text = text.replace(marker, replacement, 1)
old_select = '''                  <option value="">Select a service</option>\n                  <option value="home-cleaning">Home & Office Cleaning</option>\n                  <option value="fumigation">Fumigation & Pest Control</option>\n                  <option value="laundry">Laundry Services</option>'''
new_select = '''                  <option value="">Select a service</option>\n                  <option value="Washroom Cleaning">Washroom Cleaning</option>\n                  <option value="Clothes Folding">Clothes Folding</option>\n                  <option value="Carpet Cleaning">Carpet Cleaning</option>\n                  <option value="Residential & Commercial Cleaning">Residential & Commercial Cleaning</option>\n                  <option value="Kitchen Cleaning">Kitchen Cleaning</option>\n                  <option value="Mopping">Mopping</option>\n                  <option value="Dusting">Dusting</option>\n                  <option value="Window Cleaning">Window Cleaning</option>\n                  <option value="Moving Services">Moving Services</option>\n                  <option value="After Party Cleaning">After Party Cleaning</option>\n                  <option value="Trash Cleaning">Trash Cleaning</option>\n                  <option value="Fumigation & Pest Control">Fumigation & Pest Control</option>\n                  <option value="Laundry Services">Laundry Services</option>'''
if old_select not in text:
    raise SystemExit('ERROR: service select options block not found in contact.tsx')
text = text.replace(old_select, new_select, 1)
contact_path.write_text(text, encoding='utf-8')
print('contact.tsx patched')
