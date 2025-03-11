// Database of ranges and weapons based on the BAP ranges data
const rangeData = {
  range1: {
    name: "מטווח 1",
    length: 50,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle"],
    condition: "ניתן לבצע ירי בתנועה ופריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים"
  },
  range2: {
    name: "מטווח 2",
    length: 50,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: true,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle"],
    condition: "ניתן לבצע ירי בתנועה ופריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים, ירי עם שימוש במתקן עץ מאושר ובתנאי שהירי מבוצע בין ג״ג של המטווח, חל איסור לבצע ירי לכיוון סוללות ההפרדה הימנית"
  },
  range3: {
    name: "מטווח 3",
    length: 50,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: true,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle"],
    condition: "ניתן לבצע ירי בתנועה ופריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים"
  },
  range4: {
    name: "מטווח 4",
    length: 50,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: true,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle"],
    condition: "ניתן לבצע ירי בתנועה ופריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים"
  },
  range5: {
    name: "מטווח 5",
    length: 50,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: true,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle"],
    condition: "ניתן לבצע ירי בתנועה ופריקה מרכב (במסגרת אימון הגנ״ש), מותר לבצע ירי לכל הטווחים בכל המצבים"
  },
  range6: {
    name: "מטווח 6",
    length: 300,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: true,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle", "sniper"],
    condition: "ירי צלפים יבוצע 5 מעלות מתחת לקו רכס בלבד, מעבר של 100 מטר מצריך חדל במטווח 7 ו 5"
  },
  range7: {
    name: "מטווח 7",
    length: 50,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: true,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle"],
    condition: "אין אימון פריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים, מאושר ירי סטטי במסגרת בוחן ״סוף אל״ת״ (בוחן חניכה של חונך בביה״ס ללחימה בשטח, מחייב חבירה למנהל תרגיל ב״יובל 1-5״, בתרגיל ביובלים איו אישור לעלות מעל שליש גובה השלוחה במידה ומתקיים מטווח במקביל במטווח זה, נדרש יחס חניכה במטווח ל 1ל 3"
  },
  range8: {
    name: "מטווח 8",
    length: 100,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: true,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle"],
    condition: "אין אימון פריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים, מאושר ירי סטטי במסגרת בוחן ״סוף אל״ת״ (בוחן חניכה של חונך בביה״ס ללחימה בשטח, מחייב חבירה למנהל תרגיל ב״יובל 1-5״, בתרגיל ביובלים איו אישור לעלות מעל שליש גובה השלוחה במידה ומתקיים מטווח במקביל במטווח זה, נדרש יחס חניכה במטווח ל 1ל 3"
  },
  range9: {
    name: "מטווח 9",
    length: 100,
    isOpen: false,
    hasAsphalt: false,
    hasLighting: true,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle", "negev"],
    condition: "אין ירי בתנועה אין ירי טרור ירי סטאטי בלבד, אין אימון פריקה מרכב, מותר לבצע ירי לכל הטווחים בכל המצבים, המטרות תמוקמנה בצמוד לחומת המפגע בלבד, בטווח 100 מטר הירי מאושר בשכיבה בלבד, מחייב חבירה למנהל תרגיל ב״יובל 1-5״, בתרגיל ביובלים איו אישור לעלות מעל שליש גובה השלוחה במידה ומתקיים מטווח במקביל במטווח זה, נדרש יחס חניכה במטווח ל 1ל 3"
  },
  range10: {
    name: "מטווח 10",
    length: 180,
    isOpen: false,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: false,
    allowedWeapons: [],
    condition: ""
  },
  range11: {
    name: "מטווח 11",
    length: 50,
    isOpen: false,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle"],
    condition: "לא מאושר ירי בתנועה, אין ירי טרור, אין אימון פריקה מרכב, אין ירי מקלעים"
  },
  range12: {
    name: "מטווח 12",
    length: 100,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "mag"],
    condition: "איפוס בשכיבה לטווח 25 מ׳ 5.56 בלבד. ירי לטווח 100 מ׳ - נייח בשכיבה בלבד 5.56. ירי מצבים מקו 50 מ׳ מחומת המפגע בלבד. ירי בתנועה יבוצע מקו 50 מטר ועד לחומת מפגע. ירי מא״ג 7.62 יבוצע בשכיבה מקו 50 מטר מחומת מפגע ע״ג דורגלים."
  },
  range13: {
    name: "מטווח 13",
    length: 100,
    isOpen: true,
    hasAsphalt: true,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "mag", "negev"],
    condition: "איפוס בשכיבה לטווח 25 מ׳ 5.56 בלבד. ירי לטווח 100 מ׳ - נייח בשכיבה בלבד 5.56. ירי מצבים מקו 50 מ׳ מחומת המפגע בלבד. ירי בתנועה יבוצע מקו 50 מטר ועד לחומת מפגע. ירי מא״ג 7.62 יבוצע בשכיבה מקו 50 מטר מחומת מפגע ע״ג דורגלים."
  },
  range14: {
    name: "מטווח 14",
    length: 100,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "mag", "negev"],
    condition: "איפוס בשכיבה לטווח 25 מ׳ 5.56 בלבד. ירי לטווח 100 מ׳ - נייח בשכיבה בלבד 5.56. ירי מצבים מקו 50 מ׳ מחומת המפגע בלבד. ירי בתנועה יבוצע מקו 50 מטר ועד לחומת מפגע. ירי מא״ג 7.62 יבוצע בשכיבה מקו 50 מטר מחומת מפגע ע״ג דורגלים."
  },
  range15: {
    name: "מטווח 15",
    length: 100,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "mag", "negev"],
    condition: "איפוס בשכיבה לטווח 25 מ׳ 5.56 בלבד. ירי לטווח 100 מ׳ - נייח בשכיבה בלבד 5.56. ירי מצבים מקו 50 מ׳ מחומת המפגע בלבד. ירי בתנועה יבוצע מקו 50 מטר ועד לחומת מפגע. ירי מא״ג 7.62 יבוצע בשכיבה מקו 50 מטר מחומת מפגע ע״ג דורגלים."
  },
  range16: {
    name: "מטווח 16",
    length: 100,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "mag", "negev"],
    condition: "איפוס בשכיבה לטווח 25 מ׳ 5.56 בלבד. ירי לטווח 100 מ׳ - נייח בשכיבה בלבד 5.56. ירי מצבים מקו 50 מ׳ מחומת המפגע בלבד. ירי בתנועה יבוצע מקו 50 מטר ועד לחומת מפגע. ירי מא״ג 7.62 יבוצע בשכיבה מקו 50 מטר מחומת מפגע ע״ג דורגלים."
  },
  range17: {
    name: "מטווח 17",
    length: 50,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "negev"],
    condition: "ניתן לבצע ירי בתנועה. אין אימון פריקה מרחב. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range18: {
    name: "מטווח 18",
    length: 50,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "negev"],
    condition: "ניתן לבצע ירי בתנועה. אין אימון פריקה מרחב. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range19: {
    name: "מטווח 19",
    length: 50,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "negev"],
    condition: "ניתן לבצע ירי בתנועה. אין אימון פריקה מרחב. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range20: {
    name: "מטווח 20",
    length: 50,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: true,
    allowedWeapons: ["rifle", "negev"],
    condition: "ניתן לבצע ירי בתנועה. אין אימון פריקה מרחב. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range21: {
    name: "מטווח 21",
    length: 100,
    isOpen: false,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle", "negev"],
    condition: "אין ירי בתנועה ואין ירי טרור. אין אימון פריקה מרכב. מותר לבצע ירי בכל הטווחים לכל המצבים. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range22: {
    name: "מטווח 22",
    length: 50,
    isOpen: false,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle"],
    condition: "אין ירי בתנועה ואין ירי טרור. אין אימון פריקה מרכב. מותר לבצע ירי בכל הטווחים לכל המצבים. ירי נגב יבוצע עד טווח 50 מטר מחומת המפגע."
  },
  range23: {
    name: "מטווח 23",
    length: 300,
    isOpen: true,
    hasAsphalt: false,
    hasLighting: false,
    allowsMovementShooting: false,
    allowedWeapons: ["rifle", "mag","sniper"],
    condition: "אין ירי לטווח 25 מטר, אין לנוע על השלוחות של ״גרזן״ ו״צביקה 1״, לבדיקת מטרות מעבר לקו ה-50 מטר נדרש לחדול את מטווחים 21 ו-22. חל איסור על ירי מברט."
  }
};

// Weapon names map
const weaponNames = {
  rifle: "נק\"ל (5.56)",
  sniper: "צלפים",
  mag: "מא\"ג",
  negev: "נגב"
};

// Function to create a tooltip element for range conditions
function createTooltip(condition) {
  if (!condition) return '';

  return `
    <div class="tooltip">
      <i class="fas fa-info-circle"></i>
      <span class="tooltiptext">${condition}</span>
    </div>
  `;
}

// Populate range checkboxes on page load
document.addEventListener('DOMContentLoaded', function() {
  const rangeCheckboxes = document.getElementById('rangeCheckboxes');

  // Sort ranges by number
  const sortedRanges = Object.keys(rangeData).sort((a, b) => {
    const numA = parseInt(a.replace('range', ''));
    const numB = parseInt(b.replace('range', ''));
    return numA - numB;
  });

  sortedRanges.forEach(rangeId => {
    const range = rangeData[rangeId];
    const label = document.createElement('label');

    // Create the tooltip if there are conditions
    const tooltipHtml = createTooltip(range.condition);

    label.innerHTML = `
      <input type="checkbox" name="range" value="${rangeId}">
      ${range.name}
      <span style="margin-right: 5px;">(${range.length}מ')</span>
      ${tooltipHtml}
    `;

    rangeCheckboxes.appendChild(label);
  });
});

// Function to check ranges and display allowed weapons
function checkRanges() {
  const selectedRanges = document.querySelectorAll('input[name="range"]:checked');
  const resultsDiv = document.getElementById('rangeResults');

  if (selectedRanges.length === 0) {
    alert('נא לבחור לפחות מטווח אחד');
    return;
  }

  resultsDiv.innerHTML = '<h3>כלי נשק מותרים במטווחים שנבחרו:</h3>';

  // Track weapons allowed across selected ranges
  const weaponsCount = {
    rifle: 0,
    mag: 0,
    negev: 0,
    sniper: 0
  };

  selectedRanges.forEach(rangeCheckbox => {
    const rangeId = rangeCheckbox.value;
    const range = rangeData[rangeId];

    // Count weapons across all selected ranges
    range.allowedWeapons.forEach(weapon => {
      weaponsCount[weapon]++;
    });

    // Convert weapon codes to Hebrew names
    const allowedWeaponsHebrew = range.allowedWeapons.map(weapon => weaponNames[weapon]);

    // Create result item for this range
    const rangeInfo = document.createElement('div');
    rangeInfo.classList.add('result-item');

    // Add range type and features info
    let featuresInfo = '';
    
    // Add range type (open/closed)
    const rangeType = range.isOpen ? 'מטווח פתוח' : 'מטווח סגור';
    featuresInfo += rangeType;
    
    // Add movement icon if applicable
    if (range.allowsMovementShooting) {
      featuresInfo += ' | <i class="fas fa-walking" style="color: #64B5F6; margin-left: 5px; margin-right: 5px;"></i> מאפשר ירי בתנועה';
    }

    // Handle case with no allowed weapons
    const weaponsText = allowedWeaponsHebrew.length > 0
      ? `מותר לירות ${allowedWeaponsHebrew.join(', ')}`
      : 'אין נשקים מאושרים במטווח זה';

    rangeInfo.innerHTML = `
      <strong>${range.name}</strong> (אורך: ${range.length} מטר | ${featuresInfo}):
      ${weaponsText}
    `;

    // Add conditions if available
    if (range.condition) {
      const conditionElem = document.createElement('div');
      conditionElem.classList.add('range-conditions');
      conditionElem.innerHTML = `<i class="fas fa-info-circle"></i> הערה: ${range.condition}`;
      rangeInfo.appendChild(conditionElem);
    }

    resultsDiv.appendChild(rangeInfo);
  });

  // Add summary section
  const summaryDiv = document.createElement('div');
  summaryDiv.innerHTML = `
    <h3>סיכום מתוך המטווחים שנבחרו:</h3>
    <div class="result-item" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
      <div><i class="fas fa-crosshairs" style="margin-left: 8px;"></i>${weaponsCount.rifle} מטווחי נק"ל (5.56)</div>
      <div><i class="fas fa-crosshairs" style="margin-left: 8px;"></i>${weaponsCount.mag} מטווחי מא"ג</div>
      <div><i class="fas fa-crosshairs" style="margin-left: 8px;"></i>${weaponsCount.negev} מטווחי נגב</div>
      <div><i class="fas fa-crosshairs" style="margin-left: 8px;"></i>${weaponsCount.sniper} מטווחי צלפים</div>
    </div>
  `;
  summaryDiv.style.marginTop = '20px';

  resultsDiv.appendChild(summaryDiv);
  resultsDiv.classList.remove('hidden');
}

// Function to check weapons and display compatible ranges
function checkWeapons() {
  const selectedWeapons = document.querySelectorAll('input[name="weapon"]:checked');
  const resultsDiv = document.getElementById('weaponResults');

  if (selectedWeapons.length === 0) {
    alert('נא לבחור לפחות סוג נשק אחד');
    return;
  }

  resultsDiv.innerHTML = '<h3>מטווחים מתאימים לפי סוג נשק:</h3>';

  // For each selected weapon, find compatible ranges
  selectedWeapons.forEach(weaponCheckbox => {
    const weaponId = weaponCheckbox.value;
    const weaponName = weaponNames[weaponId];

    // Find ranges that allow this weapon (focusing only on ranges that allow the weapon)
    const compatibleRanges = Object.values(rangeData).filter(range =>
      range.allowedWeapons.includes(weaponId)
    );

    // Sort ranges by number
    compatibleRanges.sort((a, b) => {
      const numA = parseInt(a.name.replace('מטווח ', ''));
      const numB = parseInt(b.name.replace('מטווח ', ''));
      return numA - numB;
    });

    // Format range names with status icons
    const formattedRanges = compatibleRanges.map(range => {
      return `<span class="range-badge" title="${range.name} - ${range.length}מ'">${range.name}</span>`;
    });

    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    // Choose appropriate icon based on weapon type
    let weaponIcon;
    switch(weaponId) {
      case 'rifle':
        weaponIcon = 'fas fa-rifle';
        break;
      case 'sniper':
        weaponIcon = 'fas fa-crosshairs';
        break;
      case 'mag':
      case 'negev':
        weaponIcon = 'fas fa-gun';
        break;

    }

    // Format range count text based on number of ranges
    let rangeCountText;
    if (compatibleRanges.length === 0) {
      rangeCountText = "אין מטווחים";
    } else if (compatibleRanges.length === 1) {
      rangeCountText = "מטווח אחד";
    } else {
      rangeCountText = `${compatibleRanges.length} מטווחים`;
    }

    resultItem.innerHTML = `
      <div class="weapon-result">
        <span class="weapon-count"><i class="${weaponIcon}" style="margin-left: 8px;"></i>${weaponName}: ${rangeCountText}</span>
        ${compatibleRanges.length > 0 ? 
          `<div class="range-list">${formattedRanges.join(' | ')}</div>` : 
          ''}
      </div>
    `;

    resultsDiv.appendChild(resultItem);
  });

  resultsDiv.classList.remove('hidden');
}