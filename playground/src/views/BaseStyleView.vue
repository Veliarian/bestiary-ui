<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

/* Interactive states for controlling theme variables on the <html> tag */
const colorMode = ref<'light' | 'dark'>('light')
const essence = ref<'leaf' | 'base'>('base')
const theme = ref<'default' | 'forest'>('default')

/* Template ref for the native HTML5 <dialog> modal window */
const dialogRef = ref<HTMLDialogElement | null>(null)

/* Syncs Vue state with native <html> attributes to trigger our contract changes */
const syncDocumentAttributes = () => {
    const root = document.documentElement
    root.setAttribute('data-color-mode', colorMode.value)
    root.setAttribute('data-essence', essence.value)
    root.setAttribute('data-theme', theme.value)
}

/* Watch for changes and instantly apply them to the root */
watch([colorMode, essence, theme], syncDocumentAttributes)

/* Initialize attributes on mount */
onMounted(() => {
    syncDocumentAttributes()
})

/* Dialog handlers using native browser APIs */
const openModal = () => dialogRef.value?.showModal()
const closeModal = () => dialogRef.value?.close()
</script>

<template>
    <div class="playground-wrap">
        <!-- 1. SYSTEM CONTROL PANEL (Demonstrating Scenario 2) -->
        <header class="control-panel">
            <div class="panel-brand">
                <strong>Bestiary UI</strong>
                <span>Playground</span>
            </div>
            <div class="panel-actions">
                <!-- Color Mode Toggle -->
                <label class="action-toggle">
                    <span>Mode:</span>
                    <select v-model="colorMode">
                        <option value="light">Light ☀️</option>
                        <option value="dark">Dark 🌙</option>
                    </select>
                </label>

                <!-- Essence (Colors) Toggle -->
                <label class="action-toggle">
                    <span>Essence:</span>
                    <select v-model="essence">
                        <option value="base">Base (Stone/Emerald) 🪨</option>
                        <option value="leaf">Leaf (Autumn/Forest) 🍁</option>
                    </select>
                </label>

                <!-- Theme (Geometry) Toggle -->
                <label class="action-toggle">
                    <span>Theme:</span>
                    <select v-model="theme">
                        <option value="default">Default Theme 📐</option>
                        <option value="forest">Forest (Rounded/Thick) 🌳</option>
                    </select>
                </label>
            </div>
        </header>

        <!-- 2. MAIN SHOWCASE CONTAINER -->
        <main class="showcase-content">
            <!-- SECTION 1: TYPOGRAPHY (Group 3) -->
            <section class="showcase-card">
                <h2>Section 1: Base Typography (Group 3)</h2>
                <hr />

                <div class="typography-flow">
                    <h1>h1. Bestiary Heading 1</h1>
                    <h2>h2. Bestiary Heading 2</h2>
                    <h3>h3. Bestiary Heading 3</h3>
                    <h4>h4. Bestiary Heading 4</h4>
                    <h5>h5. Bestiary Heading 5</h5>
                    <h6>h6. Bestiary Heading 6</h6>

                    <p>
                        This is a standard paragraph styling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin sodales, diam vel ultrices finibus, mi nisl egestas diam, id vulputate eros felis sit amet erat.
                        Overflow-wrap break-word test: supercalifragilisticexpialidocious_very_long_string_without_spaces_to_test_layout_integrity.
                    </p>

                    <blockquote>
                        "This is a blockquote rendering. It should automatically inherit the primary accent color on the left border, rendering with elegant italic italics and a dynamic contrast-aware semi-transparent text."
                    </blockquote>

                    <div class="list-showcase">
                        <div>
                            <h3>Unordered List (Unclassed)</h3>
                            <ul>
                                <li>First bullet point item</li>
                                <li>Second nested element in list</li>
                                <li>Third item with micro-spacing</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ordered List (Unclassed)</h3>
                            <ol>
                                <li>Step number one of process</li>
                                <li>Step number two with decimal indexing</li>
                                <li>Step number three under zero specificity</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION 2: INLINE TEXT FORMATTING (Group 4) -->
            <section class="showcase-card">
                <h2>Section 2: Inline Formatting (Group 4)</h2>
                <hr />

                <p class="inline-elements-demo">
                    This is an example of an
                    <a href="#" @click.prevent>inline hyperlink</a> which skips text descenders [3].
                    We also support <strong>strong bold text</strong>, <em>emphasized italics</em>,
                    <u>underlined words</u> with skip-ink, and <s>strikethrough deletions</s>.
                    You can write <small>small legal text</small>, highlight words with
                    <mark>mark highlight styling</mark>, and render abbreviations like
                    <abbr title="World Wide Web Consortium">W3C</abbr> with a help cursor.
                </p>

                <p class="inline-code-demo">
                    To run the development server, type the key <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop it,
                    then execute the inline code block <code>pnpm run dev</code> inside your terminal [3].
                    The programmatic output will render as <samp>Server running on port 3000</samp>,
                    and mathematical variables will look like <var>E</var> = <var>m</var><var>c</var><sup>2</sup>.
                </p>
            </section>

            <!-- SECTION 3: FORMS & DATA ENTRY (Group 5) -->
            <section class="showcase-card">
                <h2>Section 3: Native Forms & Inputs (Group 5)</h2>
                <hr />

                <form class="forms-grid" @submit.prevent>
                    <fieldset>
                        <legend>Standard Input Controls</legend>

                        <div class="form-group">
                            <label>Text Input</label>
                            <input type="text" placeholder="Enter your username..." />
                        </div>

                        <div class="form-group">
                            <label>Password Input</label>
                            <input type="password" value="secret_password" />
                        </div>

                        <div class="form-group">
                            <label>Disabled Input</label>
                            <input type="text" placeholder="You cannot type here..." disabled />
                        </div>

                        <div class="form-group">
                            <label>Native Select Dropdown</label>
                            <select>
                                <option>Stone Essence (Default)</option>
                                <option>Leaf Essence</option>
                                <option>Forest Geometry</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Advanced Inputs & Indicators</legend>

                        <div class="form-group">
                            <label>Multiline Textarea (Field-sizing auto-grow)</label>
                            <textarea placeholder="Write a comment... (This box grows natively as you type!)"></textarea>
                        </div>

                        <div class="checkbox-radio-group">
                            <label class="interactive-label">
                                <input type="checkbox" checked />
                                <span>Custom Checked Checkbox</span>
                            </label>
                            <label class="interactive-label">
                                <input type="checkbox" />
                                <span>Unchecked Checkbox</span>
                            </label>
                        </div>

                        <div class="checkbox-radio-group">
                            <label class="interactive-label">
                                <input type="radio" name="showcase-radio" checked />
                                <span>Radio Option A</span>
                            </label>
                            <label class="interactive-label">
                                <input type="radio" name="showcase-radio" />
                                <span>Radio Option B</span>
                            </label>
                        </div>

                        <div class="form-group">
                            <label>Native Progress Indicator</label>
                            <progress value="68" max="100"></progress>
                        </div>
                    </fieldset>
                </form>

                <div class="button-showcase">
                    <h3>Unclassed Native Buttons</h3>
                    <div class="button-row">
                        <button>Primary Action</button>
                        <button disabled>Disabled Action</button>
                    </div>
                </div>
            </section>

            <!-- SECTION 4: TABULAR DATA (Group 6) -->
            <section class="showcase-card">
                <h2>Section 4: Tabular Data (Group 6)</h2>
                <hr />

                <table>
                    <caption>Bestiary UI Active Semantic Palette Map</caption>
                    <thead>
                    <tr>
                        <th>Color Group</th>
                        <th>Solid Hex Value</th>
                        <th>Subtle Hex Value</th>
                        <th>Contrast Ratio</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Primary</td>
                        <td><code>oklch(0.61 0.15 145)</code></td>
                        <td><code>oklch(0.95 0.02 145)</code></td>
                        <td>4.5:1 (Passed)</td>
                    </tr>
                    <tr>
                        <td>Secondary</td>
                        <td><code>oklch(0.55 0.015 250)</code></td>
                        <td><code>oklch(0.93 0.005 250)</code></td>
                        <td>4.5:1 (Passed)</td>
                    </tr>
                    <tr>
                        <td>Success</td>
                        <td><code>oklch(0.65 0.18 140)</code></td>
                        <td><code>oklch(0.95 0.03 140)</code></td>
                        <td>4.8:1 (Passed)</td>
                    </tr>
                    <tr>
                        <td>Error</td>
                        <td><code>oklch(0.58 0.22 25)</code></td>
                        <td><code>oklch(0.94 0.03 25)</code></td>
                        <td>4.6:1 (Passed)</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <!-- SECTION 5: INTERACTIVE & MEDIA (Groups 7 & 8) -->
            <section class="showcase-card">
                <h2>Section 5: Interactive & Media (Groups 7 & 8)</h2>
                <hr />

                <div class="media-interactive-grid">
                    <div class="interactive-col">
                        <h3>Native CSS Accordions (Details/Summary)</h3>
                        <details>
                            <summary>What is Bestiary UI Style philosophy?</summary>
                            <p>
                                Bestiary UI Style is a modern, high-performance, framework-agnostic CSS styling foundation.
                                It uses CSS Houdini types, OKLCH wide color gamut, logical properties, and CSS Layers to prevent specificity wars [3].
                            </p>
                        </details>
                        <details>
                            <summary>Does it require JavaScript for interactive components?</summary>
                            <p>
                                No! Native accordions, modals, and checkboxes work on pure CSS/HTML, utilizing advanced selectors and browser-native interactive tags.
                            </p>
                        </details>

                        <div class="modal-control">
                            <h3>Native HTML5 Modal Dialog</h3>
                            <button @click="openModal">Open Dialog Modal</button>
                        </div>
                    </div>

                    <div class="media-col">
                        <h3>Iframe Pre-load Shield & Sizing</h3>
                        <!-- Iframe has the section background to prevent a FOUC white flash -->
                        <iframe
                            src="about:blank"
                            title="Iframe Pre-load Preview"
                            style="width: 100%; height: 180px; border: var(--b-stroke-default) solid var(--b-border-subtle);"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>

        <!-- 3. NATIVE DIALOG WINDOW -->
        <dialog ref="dialogRef">
            <h3 style="margin-bottom: var(--b-space-3)">Native Modal Dialog</h3>
            <p style="margin-bottom: var(--b-space-5); color: var(--b-on-surface)">
                This is a native dialog window, floating above everything in the Top Layer.
                It has a beautiful glass-morphic backdrop blur and smooth transitions.
            </p>
            <div style="display: flex; justify-content: flex-end;">
                <button @click="closeModal">Close Modal</button>
            </div>
        </dialog>
    </div>
</template>

<style scoped>
/*
  ------------------------------------------------------------
  PLAYGROUND ONLY LAYOUT (Using our contract variables!)
  ------------------------------------------------------------
  We use scoped CSS to arrange the showcase cards beautifully,
  proving that variables from our contract are fully operational!
*/

.playground-wrap {
    padding-block: var(--b-space-12);
    padding-inline: var(--b-space-6);
    max-width: var(--b-breakpoint-xl);
    margin-inline: auto;
}

/* Floating top control panel */
.control-panel {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--b-space-4);
    padding: var(--b-space-4) var(--b-space-6);
    background-color: var(--b-bg-section);
    border: var(--b-stroke-default) solid var(--b-border-default);
    border-radius: var(--b-radius-container);
    box-shadow: var(--b-shadow-md);
    position: sticky;
    top: var(--b-space-4);
    z-index: var(--b-z-nav);
    margin-bottom: var(--b-space-8);
}

.panel-brand {
    display: flex;
    flex-direction: column;
}

.panel-brand strong {
    font-family: var(--b-font-family-display);
    font-size: var(--b-h6-size);
}

.panel-brand span {
    font-size: var(--b-caption-size);
    color: color-mix(in oklch, var(--b-on-section) 50%, transparent);
}

.panel-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--b-space-4);
}

.action-toggle {
    display: flex;
    align-items: center;
    gap: var(--b-space-2);
    font-size: var(--b-label-size);
    font-weight: var(--b-label-weight);
}

.action-toggle select {
    height: var(--b-control-size-sm);
    padding-inline: var(--b-space-2);
    border: var(--b-stroke-default) solid var(--b-border-default);
    border-radius: var(--b-radius-interactive);
    background-color: var(--b-bg-surface);
    color: var(--b-on-surface);
    cursor: pointer;
}

/* Layout Content Cards */
.showcase-content {
    display: flex;
    flex-direction: column;
    gap: var(--b-space-8);
}

.showcase-card {
    padding: var(--b-space-6) var(--b-space-8);
    background-color: var(--b-bg-section);
    border: var(--b-stroke-default) solid var(--b-border-subtle);
    border-radius: var(--b-radius-container);
    box-shadow: var(--b-shadow-sm);
}

.showcase-card {
    font-size: var(--b-h3-size);
    margin-bottom: var(--b-space-1);
}

.showcase-card hr {
    margin-block: var(--b-space-4);
}

/* Typography showcase grid */
.typography-flow {
    display: flex;
    flex-direction: column;
}

.list-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--b-space-6);
    margin-top: var(--b-space-4);
}

.list-showcase {
    font-size: var(--b-h5-size);
    margin-bottom: var(--b-space-2);
}

/* Forms layout */
.forms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--b-space-6);
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--b-space-4);
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
}

.checkbox-radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--b-space-3);
    margin-bottom: var(--b-space-4);
}

.interactive-label {
    display: flex;
    align-items: center;
    gap: var(--b-space-3);
    cursor: pointer;
}

.button-showcase {
    margin-top: var(--b-space-6);
    border-block-start: var(--b-stroke-default) solid var(--b-border-subtle);
    padding-top: var(--b-space-4);
}

.button-showcase h3 {
    font-size: var(--b-h5-size);
    margin-bottom: var(--b-space-3);
}

.button-row {
    display: flex;
    gap: var(--b-space-3);
}

/* Media column layout */
.media-interactive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--b-space-6);
}

.interactive-col, .media-col {
    display: flex;
    flex-direction: column;
    gap: var(--b-space-4);
}

.interactive-col h3, .media-col h3 {
    font-size: var(--b-h5-size);
    margin-bottom: var(--b-space-2);
}

.modal-control {
    margin-top: var(--b-space-4);
}
</style>