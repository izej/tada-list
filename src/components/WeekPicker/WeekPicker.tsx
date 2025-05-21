import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format, startOfWeek, addDays } from 'date-fns';
import { pl } from 'date-fns/locale/pl';
import { enUS } from 'date-fns/locale/en-US';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { WeekPickerContainer, StyledTextField, StyledInputAdornment } from './StyledWeekPicker';

const WeekPicker = ({ selectedDate, onChange }: {
  selectedDate: Date;
  onChange: (date: Date | null) => void;
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();

  const locale = i18n.language === 'pl' ? pl : enUS;
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekEnd = addDays(weekStart, 6);
  const formattedRange = `${format(weekStart, 'MMM d', { locale })} – ${format(weekEnd, 'MMM d, yyyy', { locale })}`;

  return (
    <WeekPickerContainer ref={anchorRef}>
      <DatePicker
        value={selectedDate}
        onChange={(newDate) => {
          if (newDate) {

            onChange(newDate);
          }
          setOpen(false);
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        enableAccessibleFieldDOMStructure={false}
        slotProps={{
          popper: {
            anchorEl: anchorRef.current,
            placement: 'bottom-start',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 8],
                },
              },
            ],
          },
        }}
        slots={{
          textField: (params) => (
            <StyledTextField
              {...params}
              onClick={() => setOpen(true)}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                readOnly: true,
                startAdornment: (
                  <StyledInputAdornment position="start">
                    <CalendarTodayIcon fontSize="small" />
                  </StyledInputAdornment>
                ),
              }}
              value={formattedRange}
            />
          )
        }}
      />
    </WeekPickerContainer>
  );
};

export default WeekPicker;
