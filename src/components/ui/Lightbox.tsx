"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import type { Photo } from "@/content/site";

type LightboxProps = {
  photos: readonly Photo[];
  /** Index of the photo on screen, or null when the viewer is closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Full-screen photograph viewer.
 *
 * One frame at a time, contained rather than cropped, so a portrait shot is
 * seen whole. Arrow keys and swipe move through the set, Escape leaves, and
 * focus is trapped while it's open and handed back to the trigger on close.
 */
export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = photos.length;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % total);
  }, [index, onNavigate, total]);

  const goPrevious = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + total) % total);
  }, [index, onNavigate, total]);

  // Keyboard: escape out, arrows through, and keep tabbing inside the dialog.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        goNext();
        return;
      }
      if (event.key === "ArrowLeft") {
        goPrevious();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, goNext, goPrevious]);

  // Hold the page still behind the viewer, and return focus on the way out.
  useEffect(() => {
    if (!isOpen) return;

    const trigger = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      trigger?.focus?.();
    };
  }, [isOpen]);

  if (index === null) return null;

  const photo = photos[index];

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;

    const distance = event.changedTouches[0].clientX - start;
    // Ignore anything short enough to be a tap rather than a swipe.
    if (Math.abs(distance) < 48) return;

    if (distance < 0) {
      goNext();
      return;
    }
    goPrevious();
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph ${index + 1} of ${total}: ${photo.alt}`}
      className="fixed inset-0 z-50 flex flex-col bg-ink/97 backdrop-blur-sm"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar — counter and close. */}
      <div className="flex shrink-0 items-center justify-between px-[var(--space-gutter)] py-4">
        <p className="u-eyebrow text-cream/55">
          <span className="text-gold">{index + 1}</span>
          <span aria-hidden className="mx-1.5">
            /
          </span>
          {total}
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="grid size-9 place-items-center rounded-full border border-cream/20 text-cream/75 transition-colors duration-[var(--duration-fast)] hover:border-gold hover:text-gold"
        >
          <svg viewBox="0 0 16 16" aria-hidden className="size-4">
            <path
              d="M3.5 3.5l9 9m0-9l-9 9"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* The photograph. */}
      <div className="relative min-h-0 flex-1 px-[var(--space-gutter)]">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          priority
          className="object-contain"
        />
      </div>

      {/* Caption and paddles. */}
      <div className="flex shrink-0 items-center justify-between gap-4 px-[var(--space-gutter)] py-5">
        <Paddle
          onClick={goPrevious}
          label="Previous photograph"
          direction="left"
        />

        <p className="max-w-[46ch] text-center text-[0.8125rem] text-cream/60">
          {photo.alt}
        </p>

        <Paddle onClick={goNext} label="Next photograph" direction="right" />
      </div>
    </div>
  );
}

type PaddleProps = {
  onClick: () => void;
  label: string;
  direction: "left" | "right";
};

function Paddle({ onClick, label, direction }: PaddleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group grid size-11 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/75 transition-colors duration-[var(--duration-fast)] hover:border-gold hover:text-gold"
    >
      <svg viewBox="0 0 16 16" aria-hidden className="size-4">
        <path
          d={
            direction === "left"
              ? "M10 2.5L4.5 8l5.5 5.5"
              : "M6 2.5L11.5 8 6 13.5"
          }
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
