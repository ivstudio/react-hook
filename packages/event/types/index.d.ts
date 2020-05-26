import * as React from 'react'
declare function useEvent<
  T extends Window = Window,
  K extends keyof WindowEventMap = keyof WindowEventMap
>(target: Window, type: K, listener: WindowEventListener<K>): void
declare function useEvent<
  T extends Document = Document,
  K extends keyof DocumentEventMap = keyof DocumentEventMap
>(target: Document, type: K, listener: DocumentEventListener<K>): void
declare function useEvent<
  T extends HTMLElement = HTMLElement,
  K extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
>(
  target: React.RefObject<T> | T | null,
  type: K,
  listener: ElementEventListener<K>
): void
export declare type ElementEventListener<
  K extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
> = (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
export declare type DocumentEventListener<
  K extends keyof DocumentEventMap = keyof DocumentEventMap
> = (this: Document, ev: DocumentEventMap[K]) => any
export declare type WindowEventListener<
  K extends keyof WindowEventMap = keyof WindowEventMap
> = (this: Document, ev: WindowEventMap[K]) => any
export default useEvent
