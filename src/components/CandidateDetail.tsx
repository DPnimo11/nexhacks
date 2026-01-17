'use client'

import { Candidate } from '@/types'
import { X, Heart, Star, User, Briefcase, GraduationCap, Code, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CandidateDetailProps {
  candidate: Candidate
  onClose: () => void
  onSwipe: (direction: 'left' | 'right') => void
  onStar: () => void
}

export default function CandidateDetail({
  candidate,
  onClose,
  onSwipe,
  onStar
}: CandidateDetailProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="bg-white dark:bg-slate-800 w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-white z-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{candidate.name}</h2>
                <p className="text-primary-100">{candidate.email}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] space-y-6">
            {/* AI Summary */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4">
              <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                AI Summary
              </h3>
              <p className="text-slate-700 dark:text-slate-200">{candidate.aiSummary}</p>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-warning" />
                Key Strengths
              </h3>
              <ul className="space-y-2">
                {candidate.topStrengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                    <span className="text-success mt-0.5">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work History */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary-500" />
                Work Experience
              </h3>
              <div className="space-y-4">
                {candidate.workHistory.map((work, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-primary-200 dark:border-primary-700 pl-4"
                  >
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {work.role}
                      </h4>
                      {work.isStartup && (
                        <span className="px-2 py-0.5 bg-warning/10 text-warning text-xs rounded-full">
                          Startup
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {work.company} · {work.duration}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {work.highlights.map((highlight, j) => (
                        <li key={j} className="text-sm text-slate-600 dark:text-slate-300">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            {candidate.projects.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-success" />
                  Projects
                </h3>
                <div className="space-y-3">
                  {candidate.projects.map((project, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4"
                    >
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {project.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {candidate.education.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary-500" />
                  Education
                </h3>
                <div className="space-y-2">
                  {candidate.education.map((edu, i) => (
                    <div key={i} className="text-slate-700 dark:text-slate-200">
                      <p className="font-medium">
                        {edu.degree} in {edu.field}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.institution} · {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Raw Resume */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Original Resume
              </h3>
              <pre className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 text-sm text-slate-700 dark:text-slate-200 whitespace-pre-wrap font-mono overflow-x-auto">
                {candidate.rawResume}
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => onSwipe('left')}
                className="flex-1 py-3 bg-danger/10 hover:bg-danger/20 text-danger font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                Pass
              </button>
              <button
                onClick={onStar}
                className="py-3 px-6 bg-warning/10 hover:bg-warning/20 text-warning font-medium rounded-xl transition-colors"
              >
                <Star className="w-5 h-5" />
              </button>
              <button
                onClick={() => onSwipe('right')}
                className="flex-1 py-3 bg-success/10 hover:bg-success/20 text-success font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Interested
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
