export const SHOP_CATEGORIES = {
  BALANCE: 'balance',
  LIFT: 'lift',
  CLARIFY: 'clarify',
  CALM: 'calm',

  MENTAL_HEALTH: 'mental-health',
  GUT_HEALTH: 'gut-health',
  SLEEP: 'sleep',
  ENERGY: 'energy',
  HORMONAL_HEALTH: 'hormonal-health',
  IMMUNITY: 'immunity',
  ANTI_AGING: 'anti-aging',
  WEIGHT_MANAGEMENT: 'weight-management',

  BEST_SELLERS: 'best-sellers',
  PACKAGES: 'packages',
  MERCHANDISE: 'merchandise',

  ALL: 'all',

  REWARDS: 'rewards',
  SHARE_THE_WELLTH: 'referral-program',
}

export const OPPORTUNITY_PAGES = {
  INDEX: 'opportunity',
}

export const INGREDIENTS = {
  ADAPTOGENS: 'adaptogens',
  HERBS: 'herbs',
  MUSHROOMS: 'mushrooms',
  PROBIOTICS: 'probiotics',
}

export const USER_GROUPS = {
  RETAIL_CUSTOMER: 1,
  MEMBER: 2,
  ONLINE_CUSTOMER: 3,
  EXPERIMENTAL: 9,
  SPECIALIST: 10,
  CUSTOMER_SERVICE: 20,
  TRANSLATORS: 21,
  SHIPPING: 23,
  COUNTRY_MANAGER: 25,
  FINANCE: 30,
  FINANCE_MANAGERS: 35,
  LICENSEE: 40,
  CORP_HQ: 45,
  ADMINISTRATORS: 90,
  EXECUTIVES: 100,
  PROJECT_MANAGER: 101,
  PROJECT_POINT: 102,
  DEVELOPERS: 1001,
}

export const DISCOVER = {
  OUR_PHILOSOPHY: 'our-philosophy',
  OUR_FOUNDATION: 'our-foundation',
}

// Quiz History Constants
export const resultsByCategory = [
  {
    stressQuizCategoryId: 1,
    stressQuizCategory: {
      stressQuizCategoryId: 1,
      name: 'energy',
      maxCategoryScore: 8,
      titleTranslationId: 15969,
      displayOrder: 1,
      titleTranslation: {
        translationItemId: 15969,
        translations: [
          {
            translationStringText: 'Energy',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Energía',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>Stress has a noticeable and immediate impact on energy levels and production. When under stress, your body responds by releasing stress hormones like adrenaline and cortisol. While these hormones can initially cause a surge of energy, often known as the "fight or flight" response, they can also quickly lead to fatigue once the immediate stress has passed.</p><p>Chronic stress keeps stress hormones at high levels, leading to persistent feelings of exhaustion and depletion. The constant activation of the stress response system wears out the body\'s physical and mental resources, which then leads to feelings of burnout. To mitigate the impacts of stress on your energy levels, healthy lifestyle habits like getting enough sleep, regular exercise and balanced nutrition are critical. </p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés tiene un impacto visible e inmediato en los niveles y en la producción de energía. Al estar bajo estrés, el cuerpo responde liberando las hormonas del estrés como la adrenalina y el cortisol. Si bien estas hormonas inicialmente pueden causar una oleada de energía, a menudo conocida como la respuesta de "lucha o huida", también pueden provocar fatiga rápida cuando el estrés inmediato ha pasado.</p><p>El estrés crónico mantiene las hormonas del estrés en niveles altos, lo que genera la sensación persistente de debilidad y agotamiento. La activación constante del sistema de respuesta al estrés desgasta los recursos físicos y mentales del cuerpo, y provoca esa sensación extenuante. Para mitigar estos impactos en los niveles de energía; los hábitos de un estilo de vida saludable, como dormir lo suficiente, hacer ejercicio regularmente y mantener una nutrición equilibrada, son fundamentales.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 2,
    stressQuizCategory: {
      stressQuizCategoryId: 2,
      name: 'digestion',
      maxCategoryScore: 8,
      titleTranslationId: 15970,
      displayOrder: 2,
      titleTranslation: {
        translationItemId: 15970,
        translations: [
          {
            translationStringText: 'Digestion',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Digestión',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>When your body is in a state of constant stress, it produces stress hormones that can alter the proper functioning of your gastrointestinal system. This can lead to a range of issues including stomach upset, constipation, diarrhea, inflammation, decreased nutrient absorption and changes in appetite.</p><p>The disruption of normal digestive functioning is particularly harmful for overall well-being because of the close connection between the gut and brain. Many people don’t realize that the two are inextricably tied together! Many of our hormones are produced in the intestinal tract, including about 90% of our serotonin, so when your digestion isn’t going well, odds are that many other areas of your health are also functioning at a less than optimal level.</p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>Cuando tu cuerpo está en un estado de estrés constante, produce hormonas del estrés que pueden alterar el buen funcionamiento de tu sistema gastrointestinal. Esto puede conducir a una variedad de problemas que incluyen malestar estomacal, estreñimiento, diarrea, inflamación, disminución de la absorción de nutrientes y cambios en el apetito.</p><p>La interrupción del funcionamiento normal digestivo es particularmente dañina para el bienestar general debido a la estrecha conexión entre el intestino y el cerebro. ¡Muchas personas no están conscientes de que ambos están indisolublemente unidos! Muchas de nuestras hormonas se producen en el tracto intestinal, incluyendo aproximadamente el 90% de nuestra serotonina, por lo que si tu digestión no está bien, es probable que muchas otras áreas de tu salud también estén funcionando a un nivel menor a lo óptimo.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 3,
    stressQuizCategory: {
      stressQuizCategoryId: 3,
      name: 'focus-cognition',
      maxCategoryScore: 8,
      titleTranslationId: 15971,
      displayOrder: 3,
      titleTranslation: {
        translationItemId: 15971,
        translations: [
          {
            translationStringText: 'Focus + cognition',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Enfoque + Cognición',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>Stress has a significant impact on cognitive functions, including focus and memory. Chronic stress has been associated with poorer cognitive function and accelerated cognitive decline. It can affect your working memory, attention, response inhibition and cognitive flexibility, making it harder to concentrate, process information, remember things, and make decisions.</p><p>Two of the primary cognitive symptoms of stress are forgetfulness and difficulty with concentration. Stress can also lead to rigid thinking, where you have difficulty adapting to new situations or changing your plans when circumstances change. </p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés tiene un impacto significativo en las funciones cognitivas, incluidos el enfoque y la memoria. El estrés crónico está asociado con una función cognitiva pobre y un deterioro cognitivo acelerado. Puede afectar la memoria de trabajo, la atención, la inhibición de la respuesta y la flexibilidad cognitiva, lo cual dificulta la concentración, el procesamiento de información, el recuerdo y la toma de decisiones.</p><p>Dos de los principales síntomas cognitivos de estrés son el olvido y la dificultad para concentrarse. El estrés también puede causar un pensamiento rígido, lo que provoca dificultad para adaptarse a nuevas situaciones o cambiar los planes cuando cambian las circunstancias.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 4,
    stressQuizCategory: {
      stressQuizCategoryId: 4,
      name: 'flexibility-muscles-joints',
      maxCategoryScore: 8,
      titleTranslationId: 15972,
      displayOrder: 4,
      titleTranslation: {
        translationItemId: 15972,
        translations: [
          {
            translationStringText: 'Flexibility: muscles + joints',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Flexibilidad: músculos + articulaciones',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>When the body is constantly stressed, muscles can remain in a state of alertness. This chronic tension, over time, can cause muscles to weaken and have a limited range of motion and flexibility, leading to more stress, fatigue and daily discomfort or difficulty. This can increase the risk of injuries, and for many, it gets in the way of doing what they love!</p><p>Chronic stress also exacerbates inflammation and inflammation-related conditions, which can have a negative impact on your joint mobility and comfort. Stress management techniques such as regular physical activity, relaxation practices, balanced nutrition, adequate sleep and stretching or massage can go a long ways towards mitigating these negative effects.</p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>Cuando el cuerpo está constantemente estresado, los músculos pueden permanecer en estado de alerta. Esta tensión crónica, con el tiempo, puede hacer que los músculos se debiliten y tengan un rango de movimiento y flexibilidad limitados, lo que genera más estrés, fatiga y molestias o dificultades diarias. Esto puede aumentar el riesgo de lesiones, y para muchos, ¡se interpone en el camino de hacer lo que aman!</p><p>El estrés crónico también exacerba la inflamación y las condiciones relacionadas con la inflamación, lo que puede tener un impacto negativo en la movilidad y comodidad de las articulaciones. Las técnicas de control del estrés, como la actividad física regular, las prácticas de relajación, la nutrición balanceada, el sueño adecuado y los estiramientos o masajes, pueden contribuir en gran medida a mitigar estos efectos negativos.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 5,
    categoryScore: 8,
    maxCategoryScore: 8,
    stressQuizCategory: {
      stressQuizCategoryId: 5,
      name: 'general-comfort',
      maxCategoryScore: 8,
      titleTranslationId: 15973,
      displayOrder: 5,
      titleTranslation: {
        translationItemId: 15973,
        translations: [
          {
            translationStringText: 'General comfort',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Comodidad general',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              "<p>Chronic stress can have a profound negative impact on your daily comfort levels, particularly in relation to aches, pains, and headaches. When you are under constant stress, your body remains in a state of high alert. Over time, this heightened state of physical tension can lead to musculoskeletal issues such as neck, back, and shoulder pain.  </p><p>This tension is also a common trigger for tension-type headaches and migraines. Moreover, the changes in your body's hormone levels, as a result of chronic stress, can influence the onset of migraines as well. </p><p>Also, stress-related disruptions in sleep patterns can contribute to fatigue and lower pain tolerance, which in turn can make you more susceptible to pain and headaches.</p>",
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés crónico puede tener un impacto negativo profundo en tus nivel de comodidad diario, particularmente en relación con dolores y molestias, y dolores de cabeza. Cuando estás bajo un estrés constante, tu cuerpo permanece en un estado de alta alerta. Con el tiempo, este estado elevado de tensión física puede llevar a problemas musculoesqueléticos como dolor en el cuello, la espalda y los hombros.</p><p>Esta tensión también es un desencadenante común para las cefaleas y migrañas de tipo tensional. Además, los cambios en los niveles hormonales de tu cuerpo, como resultado del estrés crónico, pueden influir en el inicio de las migrañas también.</p><p>Además, las interrupciones de sueño relacionados con el estrés pueden contribuir a la fatiga y a una menor tolerancia al dolor, lo que a su vez puede hacerte más susceptible a los dolores y dolores de cabeza.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 6,
    stressQuizCategory: {
      stressQuizCategoryId: 6,
      name: 'hair-skin-nails',
      maxCategoryScore: 12,
      titleTranslationId: 15974,
      displayOrder: 6,
      priority: 6,
      titleTranslation: {
        translationItemId: 15974,
        translations: [
          {
            translationStringText: 'Hair, skin + nails',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Cabello, piel + uñas',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>When it comes to hair, stress can push a large number of hair follicles into a resting phase known as telogen effluvium, causing them to fall out suddenly during routine activities like combing or washing your hair</p><p>For the skin, chronic stress weakens the immune system, making you more susceptible to infections and skin diseases, but stress also suppresses collagen production. This leads to decreased elasticity, flexibility and thickness. </p><p>As for stress’ effect on your nails, stress can make it harder for your body to absorb necessary nutrients, leading to symptoms like nail ridging, pitting and shredding that weaken the nails. Furthermore, stress often leads to nervous habits like biting or rubbing the nails, which can cause further damage to the nail bed.</p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>Cuando se trata del cabello, el estrés puede provocar que una gran cantidad de folículos pilosos entren en una fase de reposo conocida como efluvio telógeno, lo que causa que el cabello se caiga repentinamente durante actividades rutinarias como peinarse o lavarse el cabello.</p><p>Tratándose de la piel, el estrés crónico debilita el sistema inmunológico, haciéndote más susceptible a infecciones y enfermedades de la dermis, además de suprimir la producción de colágeno. Esto conduce a una disminución de la elasticidad, flexibilidad y grosor de la piel.</p><p>En cuanto al efecto en las uñas, el estrés puede dificultar que el cuerpo absorba los nutrientes necesarios, lo que provoca síntomas que las debilitan las uñas como rugosidades, hendiduras y rajaduras. Además, el estrés causa hábitos nerviosos como morderse o frotarse las uñas, lo que puede causar aún más daño.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 7,
    stressQuizCategory: {
      stressQuizCategoryId: 7,
      name: 'sleep',
      maxCategoryScore: 12,
      titleTranslationId: 15975,
      displayOrder: 7,
      titleTranslation: {
        translationItemId: 15975,
        translations: [
          {
            translationStringText: 'Sleep',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Sueño',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              "<p>The connection between sleep and stress is bidirectional, meaning that they significantly influence and impact one another. When you experience stress, your body releases stress hormones like cortisol, which can disrupt the natural sleep-wake cycle and make it difficult to fall asleep or maintain restful sleep throughout the night. This disruption in sleep patterns can lead to sleep deprivation, which in turn exacerbates feelings of stress, creating a vicious cycle that can negatively affect overall well-being.</p><p>Lack of quality sleep can have several detrimental effects on the body's ability to manage stress. Sleep deprivation impairs cognitive function, including memory, decision-making and problem-solving skills, making it more challenging to cope with daily stressors effectively. Furthermore, insufficient sleep weakens the immune system, making individuals more susceptible to illness and prolonging the recovery process, which can add additional stress to an already taxed system. Emotionally, sleep deprivation can lead to increased irritability, mood swings, and heightened anxiety levels, further exacerbating stress and potentially straining relationships with others.</p>",
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>La conexión entre el sueño y el estrés es bidireccional, lo que significa que ambos tienen influencia e impacto entre sí. Cuando experimentamos estrés, el cuerpo libera hormonas como el cortisol, lo cual puede interrumpir el ciclo natural del sueño y hace difícil conciliar el sueño o mantener un descanso reparador durante la noche. Esta interrupción puede conducir a la privación del sueño, lo que a su vez exacerba la sensación de estrés y crea un círculo vicioso que puede afectar negativamente el bienestar general.</p><p>La falta de sueño de calidad puede tener varios efectos perjudiciales en la capacidad del cuerpo para manejar el estrés. Afecta la función cognitiva, incluyendo la memoria, la toma de decisiones y la capacidad para resolver problemas, lo que hace que sea más difícil lidiar con los factores estresantes de forma efectiva. Aún más, el sueño insuficiente debilita el sistema inmunológico dejándonos más susceptibles a las enfermedades y prolonga los procesos de  recuperación, lo cual agrega más estrés a un sistema ya agotado. Emocionalmente, la falta de sueño aumenta la irritabilidad, los cambios de ánimo y eleva los niveles de ansiedad, exacerbando aún más el estrés, lo que genera tensión en nuestras relaciones con los demás.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 8,
    stressQuizCategory: {
      stressQuizCategoryId: 8,
      name: 'mood-stability',
      maxCategoryScore: 12,
      titleTranslationId: 15976,
      displayOrder: 8,
      titleTranslation: {
        translationItemId: 15976,
        translations: [
          {
            translationStringText: 'Mood stability',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Estabilidad emocional',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              "<p>Chronic stress can have a significant impact on mood stability, often leading to mental health problems and medical issues. It has been robustly linked to the onset of major depressive disorder (MDD), which is recognized as the leading cause of disability worldwide. As we discussed in the digestion section, chronic stress is also associated with changes in gut bacteria, which can influence mood. <p>Furthermore, chronic stress can result in personality changes such as withdrawal from friends and family, lack of interest in activities that used to be enjoyable, and impulsive behavior. It's important to note that these changes can be signs of emotional distress, and seeking help is crucial in such instances.</p><p>While stress and mood disorders are on the rise, the good news is that stress-relieving activities have been shown to improve mood and daily function. Most professionals now agree that with appropriate interventions and lifestyle modifications, these effects can be managed effectively.</p>",
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés crónico puede tener un impacto significativo en la estabilidad del estado de ánimo, lo que a menudo conduce a problemas de salud mental y problemas médicos. Se lo ha relacionado sólidamente con la aparición del trastorno depresivo mayor (MDD) reconocida como la principal causa de discapacidad en todo el mundo. Como discutimos en la sección sobre la digestión, el estrés crónico también está asociado con cambios en las bacterias intestinales, lo que puede influir en el estado de ánimo.<p>Además, el estrés crónico puede resultar en cambios de personalidad tales como alejarse de los amigos y familiares, tener falta de interés en actividades que solían ser placenteras y tener un comportamiento impulsivo. Es importante tener en cuenta que estos cambios pueden ser signos de aflicción emocional, y buscar ayuda es crucial en tales casos.</p><p>Si bien el estrés y los trastornos del estado de ánimo van en aumento, se ha demostrado que las actividades para aliviar el estrés mejoran el estado de ánimo y el funcionamiento diario. La mayoría de los profesionales ahora están de acuerdo en que si se hacen las intervenciones adecuadas y las modificaciones en el estilo de vida, estos efectos se pueden controlar de manera efectiva.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 9,
    stressQuizCategory: {
      stressQuizCategoryId: 9,
      name: 'libido-hormones',
      maxCategoryScore: 12,
      titleTranslationId: 15977,
      displayOrder: 9,
      titleTranslation: {
        translationItemId: 15977,
        translations: [
          {
            translationStringText: 'Libido + hormones',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Libido + Hormonas',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>Stress and sex drive are intricately linked, with stress leading to a decrease in libido in several ways. Persistent stress can cause the adrenal hormone cortisol to suppress sex hormones, leading to a decrease in libido. This hormonal imbalance can also lead to emotional instability, further decreasing the desire for sex or intimacy.</p><p>Prolonged exposure to stress can have a far-reaching effect on your general hormonal health. When the body is constantly in a state of stress it produces an excess of the hormone cortisol, which can contribute to high blood pressure, mood changes, low libido, weight gain and irregular periods.</p><p>Chronic stress can also affect your thyroid hormones, impact ghrelin and leptin, the hormones that regulate appetite, and interfere with melatonin production, resulting in restlessness and poor sleep.</p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés y el deseo sexual están íntimamente relacionados. El estrés conduce a una disminución de la libido de varias maneras. El estrés persistente puede hacer que el cortisol (hormona suprarrenal) suprima las hormonas sexuales, lo que provoca la disminución de la libido. Este desequilibrio hormonal también puede causar inestabilidad emocional, disminuyendo aún más el deseo de intimidad.</p><p>La exposición prolongada al estrés puede efectar en gran manera la salud hormonal en general. Cuando el cuerpo está constantemente en estado de estrés, produce un exceso de cortisol, lo que puede contribuir a la hipertensión, los cambios de humor, disminución de la libido, aumento de peso y períodos irregulares.</p><p>El estrés crónico también puede afectar las hormonas tiroideas, así como la grelina y la leptina, las hormonas que regulan el apetito, e interferir con la producción de melatonina, lo que provoca inquietud y falta de sueño.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
  {
    stressQuizCategoryId: 10,
    stressQuizCategory: {
      stressQuizCategoryId: 10,
      name: 'immunity',
      maxCategoryScore: 12,
      titleTranslationId: 15978,
      displayOrder: 10,
      priority: 10,
      titleTranslation: {
        translationItemId: 15978,
        translations: [
          {
            translationStringText: 'Immunity',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText: 'Inmunidad',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
      textTranslation: {
        translations: [
          {
            translationStringText:
              '<p>Chronic stress can suppress the immune system, making you more susceptible to infections and illnesses. It can also exacerbate existing health conditions, gastrointestinal issues, and cardiovascular diseases. Part of the reason behind this is that stress can cause the immune system to produce an inflammatory response.</p><p>Furthermore, long-term chronic stress results in persistently high cortisol levels, causing resistance to cortisol and impaired anti-inflammatory responses. This hormonal imbalance can potentially contribute to the development or worsening of autoimmune conditions.</p>',
            language: {
              langId: 1,
              langCode: 'en',
            },
          },
          {
            translationStringText:
              '<p>El estrés crónico puede suprimir el sistema inmunológico, haciéndolo más susceptible a infecciones y enfermedades. También puede exacerbar las condiciones de salud existentes, los problemas gastrointestinales y las enfermedades cardiovasculares. En parte, la razón de esto es que el estrés puede causar que el sistema inmunológico produzca una respuesta inflamatoria.</p><p>Además, el estrés crónico y a largo plazo da como resultado niveles altos y persistentes de cortisol, lo que provoca resistencia al cortisol y alteraciones en las respuestas antiinflamatorias. Este desequilibrio hormonal puede contribuir potencialmente al desarrollo o empeoramiento de enfermedades autoinmunes.</p>',
            language: {
              langId: 2,
              langCode: 'es',
            },
          },
        ],
      },
    },
  },
]
