@data_keys.each_with_index do |key, idx|
  json.set! idx do
    json.key key
    json.value @data_values[idx]
  end
end
