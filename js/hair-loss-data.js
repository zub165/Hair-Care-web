const hairLossData = {
    types: {
        androgenetic: {
            name: "Androgenetic Alopecia",
            description: "Genetic hair loss condition affecting both men and women, characterized by progressive thinning of hair in a specific pattern. Most common form of hair loss, affecting approximately 50% of men and 40% of women by age 50.",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BbmRyb2dlbmV0aWMgQWxvcGVjaWE8L3RleHQ+PC9zdmc+",
            symptoms: [
                "Gradual thinning of hair",
                "Receding hairline in men",
                "Diffuse thinning in women",
                "Miniaturization of hair follicles",
                "Increased hair shedding",
                "Family history of hair loss"
            ],
            causes: [
                "Genetic predisposition",
                "DHT (Dihydrotestosterone) sensitivity",
                "Hormonal changes",
                "Age-related factors",
                "Environmental factors",
                "Lifestyle factors"
            ],
            treatments: {
                topical: [
                    {
                        name: "Minoxidil 5%",
                        dosage: "1ml twice daily",
                        duration: "Long-term",
                        notes: "FDA approved for both men and women, can be combined with other treatments"
                    },
                    {
                        name: "Topical Finasteride 0.1%",
                        dosage: "1ml once daily",
                        duration: "Long-term",
                        notes: "Emerging evidence for efficacy with reduced systemic absorption"
                    },
                    {
                        name: "Topical Cetirizine 1%",
                        dosage: "Once daily",
                        duration: "Long-term",
                        notes: "Anti-inflammatory effects via prostaglandin D2 inhibition"
                    }
                ],
                oral: [
                    {
                        name: "Dutasteride",
                        dosage: "0.5mg daily",
                        duration: "Long-term",
                        notes: "More efficacious than finasteride for male AGA"
                    },
                    {
                        name: "Finasteride",
                        dosage: "1mg daily",
                        duration: "Long-term",
                        notes: "FDA approved for men, may be used in post-menopausal women"
                    },
                    {
                        name: "Low-dose Oral Minoxidil",
                        dosage: "0.25-2.5mg daily",
                        duration: "Long-term",
                        notes: "Emerging evidence for safety and efficacy"
                    }
                ],
                combination: [
                    {
                        name: "PRP + Minoxidil",
                        frequency: "PRP monthly for 3-4 months + daily minoxidil",
                        notes: "Synergistic effects shown in clinical studies"
                    },
                    {
                        name: "Low-dose Oral Minoxidil + Spironolactone",
                        dosage: "0.25mg + 25mg daily",
                        notes: "Effective combination for female pattern hair loss"
                    }
                ],
                supplements: [
                    {
                        name: "Biotin",
                        dosage: "5000mcg daily",
                        notes: "Supports hair growth"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "Supports hair follicle health"
                    }
                ],
                procedures: [
                    {
                        name: "PRP Therapy",
                        frequency: "Monthly for 3-4 months",
                        notes: "Platelet-rich plasma treatment"
                    },
                    {
                        name: "Low-Level Laser Therapy",
                        frequency: "3 times weekly",
                        notes: "FDA cleared for home use"
                    },
                    {
                        name: "Hair Transplant",
                        type: "FUE/FUT",
                        notes: "Surgical option for advanced cases"
                    }
                ]
            },
            classification: {
                female: {
                    name: "Sinclair's Classification",
                    stages: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
                    description: "Five-grade visual scale assessing midline hair density based on the width of hair part"
                },
                male: {
                    name: "Hamilton-Norwood Classification",
                    stages: ["Type I", "Type II", "Type III", "Type IIIa", "Type IIIv", "Type IV", "Type V", "Type Va", "Type VI", "Type VII"],
                    description: "Progressive pattern of hair loss from frontal hairline and vertex"
                },
                asian: {
                    name: "BASP Classification",
                    types: {
                        basic: ["L (Linear)", "M (Middle)", "C (Curved)", "U (Undetermined)"],
                        specific: ["V (Vertex)", "F (Frontal)"],
                    },
                    description: "Specific classification for Asian hair loss patterns considering both hairline shape and density"
                }
            },
            clinicalImages: {
                microscopic: "Miniaturization of hair follicles visible under trichoscopy",
                macroscopic: "Visible thinning pattern following Ludwig's or Hamilton-Norwood scale"
            }
        },
        telogen: {
            name: "Telogen Effluvium",
            description: "Temporary hair loss condition where hair prematurely enters the telogen (resting) phase. Often triggered by stress, illness, or hormonal changes.",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UZWxvZ2VuIEVmZmx1dml1bTwvdGV4dD48L3N2Zz4=",
            symptoms: [
                "Sudden increase in hair shedding",
                "Diffuse thinning",
                "No specific pattern",
                "Reversible condition",
                "Increased hair in shower drain",
                "Wider part line"
            ],
            causes: [
                "Physical stress",
                "Emotional stress",
                "Hormonal changes",
                "Nutritional deficiencies",
                "Medications",
                "Illness or surgery",
                "Rapid weight loss",
                "Childbirth",
                "Thyroid disorders"
            ],
            treatments: {
                topical: [
                    {
                        name: "Minoxidil 5%",
                        dosage: "1ml twice daily",
                        duration: "3-6 months",
                        notes: "Helps stimulate regrowth"
                    },
                    {
                        name: "Growth Factor Serum",
                        dosage: "Once daily",
                        duration: "3-6 months",
                        notes: "Supports hair follicle health"
                    }
                ],
                oral: [
                    {
                        name: "Iron Supplements",
                        dosage: "As prescribed",
                        notes: "If iron deficiency is present"
                    },
                    {
                        name: "Thyroid Medication",
                        dosage: "As prescribed",
                        notes: "If thyroid disorder is present"
                    }
                ],
                supplements: [
                    {
                        name: "Vitamin D",
                        dosage: "2000-4000 IU daily",
                        notes: "If deficiency is present"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "If deficiency is present"
                    },
                    {
                        name: "B Complex",
                        dosage: "As directed",
                        notes: "Supports overall hair health"
                    }
                ],
                lifestyle: [
                    {
                        name: "Stress Management",
                        recommendations: [
                            "Regular exercise",
                            "Meditation",
                            "Adequate sleep",
                            "Balanced diet"
                        ]
                    }
                ]
            },
            classification: {
                types: [
                    {
                        name: "Acute Telogen Effluvium",
                        duration: "Less than 6 months",
                        characteristics: ["Sudden onset", "Clear triggering event", "Reversible"]
                    },
                    {
                        name: "Chronic Telogen Effluvium",
                        duration: "More than 6 months",
                        characteristics: ["Idiopathic", "Fluctuating course", "No clear trigger"]
                    },
                    {
                        name: "Chronic Diffuse Telogen Hair Loss",
                        duration: "Prolonged",
                        characteristics: ["Associated with systemic conditions", "Requires underlying treatment"]
                    }
                ],
                pathomechanism: [
                    "Immediate anagen release",
                    "Delayed anagen release",
                    "Short anagen syndrome",
                    "Immediate telogen release",
                    "Delayed telogen release"
                ]
            },
            clinicalImages: {
                microscopic: "Increased telogen phase hairs visible in trichoscopy",
                macroscopic: "Diffuse thinning across scalp"
            }
        },
        alopeciaAreata: {
            name: "Alopecia Areata",
            description: "Autoimmune condition causing patchy hair loss. Can progress to total scalp hair loss (alopecia totalis) or complete body hair loss (alopecia universalis).",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BbG9wZWNpYSBBcmVhdGE8L3RleHQ+PC9zdmc+",
            symptoms: [
                "Round or oval patches of hair loss",
                "Smooth scalp in affected areas",
                "Exclamation mark hairs",
                "Nail changes in some cases",
                "Sudden onset",
                "May affect eyebrows and eyelashes"
            ],
            causes: [
                "Autoimmune disorder",
                "Genetic predisposition",
                "Environmental triggers",
                "Stress",
                "Viral infections",
                "Allergies"
            ],
            treatments: {
                topical: [
                    {
                        name: "Corticosteroid Solution",
                        dosage: "Twice daily",
                        duration: "3-6 months",
                        notes: "Anti-inflammatory treatment"
                    },
                    {
                        name: "Anthralin",
                        dosage: "Once daily",
                        duration: "As prescribed",
                        notes: "Topical irritant therapy"
                    },
                    {
                        name: "Topical Immunotherapy",
                        dosage: "Weekly",
                        notes: "DPCP or SADBE treatment"
                    }
                ],
                oral: [
                    {
                        name: "Prednisone",
                        dosage: "As prescribed",
                        duration: "Short-term",
                        notes: "Systemic corticosteroid"
                    },
                    {
                        name: "Methotrexate",
                        dosage: "As prescribed",
                        duration: "Long-term",
                        notes: "Immunosuppressive medication"
                    }
                ],
                supplements: [
                    {
                        name: "Vitamin D",
                        dosage: "2000-4000 IU daily",
                        notes: "Immune system support"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "Immune system support"
                    }
                ],
                procedures: [
                    {
                        name: "Light Therapy",
                        frequency: "2-3 times weekly",
                        notes: "UVB or PUVA therapy"
                    }
                ]
            },
            classification: {
                severity: {
                    name: "SALT Score",
                    stages: [
                        "S0 (No hair loss)",
                        "S1 (<25% hair loss)",
                        "S2 (25-49% hair loss)", 
                        "S3 (50-74% hair loss)",
                        "S4 (75-99% hair loss)",
                        "S5 (100% hair loss)"
                    ],
                    description: "Standardized assessment of scalp hair loss percentage"
                },
                practical: {
                    name: "AA Severity Scale",
                    stages: [
                        "Mild (≤20% scalp hair loss)",
                        "Moderate (21-49% hair loss)",
                        "Severe (50-100% hair loss)"
                    ],
                    modifiers: [
                        "Psychosocial impact",
                        "Eyebrow/eyelash involvement",
                        "Poor treatment response",
                        "Rapidly progressive"
                    ],
                    description: "Practical classification incorporating clinical and quality of life factors"
                }
            }
        },
        traction: {
            name: "Traction Alopecia",
            description: "Hair loss caused by prolonged tension on hair follicles, often due to tight hairstyles or hair extensions.",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UcmFjdGlvbiBBbG9wZWNpYTwvdGV4dD48L3N2Zz4=",
            symptoms: [
                "Hair loss along hairline",
                "Pain or tenderness in affected areas",
                "Broken hairs",
                "Folliculitis",
                "Thinning in areas of tension"
            ],
            causes: [
                "Tight hairstyles",
                "Hair extensions",
                "Braids",
                "Ponytails",
                "Weaves",
                "Chemical treatments"
            ],
            treatments: {
                topical: [
                    {
                        name: "Anti-inflammatory Cream",
                        dosage: "As needed",
                        notes: "For inflammation"
                    }
                ],
                lifestyle: [
                    {
                        name: "Hairstyle Changes",
                        recommendations: [
                            "Avoid tight hairstyles",
                            "Use gentle hair ties",
                            "Limit chemical treatments",
                            "Regular scalp massage"
                        ]
                    }
                ]
            }
        },
        scarring: {
            name: "Scarring Alopecia",
            description: "Permanent hair loss caused by destruction of hair follicles and replacement with scar tissue.",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TY2FycmluZyBBbG9wZWNpYTwvdGV4dD48L3N2Zz4=",
            symptoms: [
                "Permanent hair loss",
                "Shiny or smooth scalp",
                "Inflammation",
                "Pain or itching",
                "Redness or scaling"
            ],
            causes: [
                "Lichen planopilaris",
                "Frontal fibrosing alopecia",
                "Discoid lupus",
                "Burns",
                "Infections",
                "Trauma"
            ],
            treatments: {
                topical: [
                    {
                        name: "Corticosteroid Cream",
                        dosage: "Twice daily",
                        notes: "Anti-inflammatory"
                    }
                ],
                oral: [
                    {
                        name: "Hydroxychloroquine",
                        dosage: "As prescribed",
                        notes: "For autoimmune causes"
                    }
                ],
                procedures: [
                    {
                        name: "Hair Transplant",
                        notes: "Only if condition is stable"
                    }
                ]
            }
        }
    },
    labTests: {
        hormonePanel: [
            "Testosterone (Total and Free)",
            "DHT (Dihydrotestosterone)",
            "TSH, T3, T4",
            "Estradiol",
            "Progesterone",
            "FSH/LH"
        ],
        vitaminPanel: [
            "Vitamin D",
            "Ferritin",
            "Zinc",
            "B12",
            "Folate",
            "Vitamin A",
            "Vitamin E"
        ],
        bloodWork: [
            "Complete Blood Count (CBC)",
            "Iron Studies",
            "CMP (Comprehensive Metabolic Panel)",
            "CRP (C-Reactive Protein)",
            "ANA (Antinuclear Antibody)",
            "Thyroid Antibodies"
        ],
        additionalTests: [
            "Scalp Biopsy",
            "Trichogram",
            "Hair Pull Test",
            "Dermoscopy"
        ]
    },
    hairCycle: {
        anagen: {
            name: "Anagen (Growth Phase)",
            description: "Active growth phase where hair follicle is producing new hair fiber",
            duration: "2-7 years",
            image: "data:image/svg+xml;base64,[SVG_DATA_FOR_ANAGEN]",
            treatments: [
                "Promote healthy growth environment",
                "Provide essential nutrients",
                "Protect from damage"
            ]
        },
        catagen: {
            name: "Catagen (Regression Phase)",
            description: "Transitional phase where hair growth stops",
            duration: "2-3 weeks",
            image: "data:image/svg+xml;base64,[SVG_DATA_FOR_CATAGEN]",
            treatments: [
                "Minimize stress factors",
                "Support follicle health",
                "Maintain scalp condition"
            ]
        },
        telogen: {
            name: "Telogen (Resting Phase)",
            description: "Resting phase where old hair is released and new hair begins to form",
            duration: "2-3 months",
            image: "data:image/svg+xml;base64,[SVG_DATA_FOR_TELOGEN]",
            treatments: [
                "Support new growth",
                "Maintain scalp health",
                "Prevent premature shedding"
            ]
        },
        exogen: {
            name: "Exogen Phase",
            description: "Shedding phase where hair falls out",
            duration: "Variable",
            treatments: [
                "Gentle hair care",
                "Anti-inflammatory scalp care",
                "Proper washing technique",
                "Avoid excessive brushing"
            ]
        }
    },
    prevention: {
        general: [
            "Maintain healthy diet",
            "Regular exercise",
            "Stress management",
            "Adequate sleep",
            "Gentle hair care",
            "Protect from UV damage"
        ],
        nutrition: [
            "Protein-rich diet",
            "Iron-rich foods",
            "Omega-3 fatty acids",
            "Antioxidant-rich foods",
            "Adequate water intake"
        ],
        hairCare: [
            "Gentle washing",
            "Avoid excessive heat",
            "Protective hairstyles",
            "Regular trims",
            "Scalp massage",
            "Avoid harsh chemicals"
        ]
    },
    trichoTest: {
        description: "Microscopic analysis of hair follicles and scalp",
        trichoscopyFindings: {
            general: {
                hairShaft: [
                    "Pohl-Pinkus constrictions",
                    "Coudability hair (tapered)",
                    "Broken hairs",
                    "Exclamation mark hairs"
                ],
                follicle: [
                    "Black dots",
                    "Yellow dots",
                    "Short vellus hairs",
                    "Pigtail hairs"
                ],
                scalp: [
                    "Peripilar sign",
                    "Focal atrichia",
                    "Perifollicular erythema",
                    "Perifollicular scales"
                ]
            },
            diseaseSpecific: {
                androgenetic: [
                    "Hair diameter diversity >20%",
                    "Increased proportion of thin hairs",
                    "Peripilar signs",
                    "Yellow dots (less prominent)"
                ],
                alopeciaAreata: [
                    "Black dots",
                    "Yellow dots (prominent)",
                    "Broken hairs",
                    "Exclamation mark hairs",
                    "Short vellus hairs",
                    "Coudability hairs"
                ],
                telogen: [
                    "Increased proportion of telogen hairs",
                    "Empty follicles",
                    "Short regrowing hairs",
                    "No inflammation signs"
                ],
                scarring: [
                    "Loss of follicular openings",
                    "Perifollicular erythema",
                    "Perifollicular scaling",
                    "White patches",
                    "Follicular keratotic plugs"
                ]
            }
        },
        diagnosticCriteria: {
            ffa: {
                name: "International FFA Cooperative Group Criteria",
                majorCriteria: [
                    "Cicatricial alopecia of frontotemporal hairline",
                    "Bilateral eyebrow loss",
                    "Perifollicular erythema",
                    "Lonely hair sign",
                    "Follicular hyperkeratosis"
                ],
                scoring: "≥4/7 points needed for classic FFA diagnosis"
            },
            fapd: {
                name: "FAPD Diagnostic Criteria",
                majorCriteria: [
                    "Hair loss in AGA pattern",
                    "Perifollicular erythema",
                    "Perifollicular scaling",
                    "Positive pull test in affected areas",
                    "Histopathologic features of LPP",
                    "Loss of follicular ostia",
                    "Symptoms (itch, burn, pain)"
                ],
                minorCriteria: [
                    "Family history of AGA",
                    "Personal history of LPP",
                    "Positive ANA",
                    "Associated autoimmune disease",
                    "Keratosis pilaris",
                    "Mucosal LP"
                ]
            }
        },
        findings: {
            normal: "Regular hair shaft diameter and structure",
            androgenetic: "Miniaturized follicles with reduced diameter",
            telogen: "Increased percentage of telogen phase hairs",
            traction: "Broken hair shafts and inflammation"
        },
        geneticMarkers: {
            androgenetic: {
                markers: ["AR", "SRD5A2", "ESR1", "ESR2"],
                recommendations: {
                    topical: [
                        {
                            name: "Minoxidil 5% with Growth Factors",
                            dosage: "1ml twice daily",
                            notes: "Enhanced with IGF-1 and FGF-7"
                        },
                        {
                            name: "Topical Finasteride 0.1%",
                            dosage: "Once daily",
                            notes: "DHT inhibitor with enhanced penetration"
                        }
                    ],
                    oral: [
                        {
                            name: "Finasteride 1mg",
                            dosage: "Daily",
                            notes: "DHT inhibitor"
                        },
                        {
                            name: "Dutasteride 0.5mg",
                            dosage: "Daily",
                            notes: "Stronger DHT inhibitor"
                        }
                    ]
                }
            },
            telogen: {
                markers: ["IL1B", "TNF", "VDR"],
                recommendations: {
                    topical: [
                        {
                            name: "Growth Factor Serum",
                            dosage: "Once daily",
                            notes: "Contains IGF-1, FGF-7, and VEGF"
                        },
                        {
                            name: "Anti-inflammatory Serum",
                            dosage: "Twice daily",
                            notes: "Contains adenosine and L-carnitine"
                        }
                    ],
                    oral: [
                        {
                            name: "MSM",
                            dosage: "1000mg daily",
                            notes: "Sulfur donor for hair growth"
                        },
                        {
                            name: "Lysine",
                            dosage: "500mg daily",
                            notes: "Amino acid for hair strength"
                        }
                    ]
                }
            }
        },
        personalizedTreatments: {
            topical: [
                {
                    name: "TrichoXidil",
                    components: ["IGF-1", "FGF-7", "VEGF"],
                    dosage: "Once daily",
                    notes: "Growth factor serum"
                },
                {
                    name: "DHT Inhibitor Serum",
                    components: ["Saw Palmetto", "Green Tea Extract", "Caffeine"],
                    dosage: "Twice daily",
                    notes: "Natural DHT inhibitors"
                }
            ],
            oral: [
                {
                    name: "Hair Growth Support",
                    components: ["Biotin", "MSM", "Lysine", "Zinc"],
                    dosage: "As directed",
                    notes: "Comprehensive hair support"
                }
            ]
        },
        labTests: {
            genetic: [
                "AR Gene Polymorphism",
                "SRD5A2 Gene Analysis",
                "ESR1/ESR2 Analysis",
                "IL1B/TNF Analysis",
                "VDR Gene Analysis"
            ],
            hormone: [
                "DHT Levels",
                "Testosterone (Total/Free)",
                "Estradiol",
                "Progesterone",
                "TSH/T3/T4"
            ],
            vitamin: [
                "Vitamin D",
                "Ferritin",
                "Zinc",
                "B12",
                "Folate"
            ]
        }
    }
}; 