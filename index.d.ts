export function html(filepath: string, options?: Record<string, unknown>): string
export function print(ast: Record<string, unknown>): string
export function parse(filepath: string): Record<string, unknown>
export function render(contents: string, options?: Record<string, unknown>): string
export function visit(root: [], visitor: (...args) => unknown | Record<string, unknown>): Record<string, unknown>
